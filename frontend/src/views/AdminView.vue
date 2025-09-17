<template>
  <div class="admin-page">
    <div class="admin-header">
      <div class="container">
        <h1 class="admin-title">VisionGrid Admin Panel</h1>
        <button v-if="isAuthenticated" @click="logout" class="btn btn-secondary">Logout</button>
      </div>
    </div>
    
    <div class="container">
      <!-- Login Form -->
      <div v-if="!isAuthenticated" class="login-section">
        <div class="login-card">
          <h2>Admin Login</h2>
          <form @submit.prevent="login" class="login-form">
            <div class="form-group">
              <label for="password">Password</label>
              <input
                id="password"
                v-model="loginPassword"
                type="password"
                required
                placeholder="Enter admin password"
              />
            </div>
            <button type="submit" class="btn btn-primary" :disabled="isLoading">
              {{ isLoading ? 'Logging in...' : 'Login' }}
            </button>
            <div v-if="loginError" class="error-message">
              {{ loginError }}
            </div>
          </form>
        </div>
      </div>
      
      <!-- Admin Dashboard -->
      <div v-else class="admin-dashboard">
        <!-- Stats Cards -->
        <div class="stats-grid grid grid-4">
          <div class="stat-card">
            <div class="stat-number">{{ stats.total }}</div>
            <div class="stat-label">Total Inquiries</div>
          </div>
          <div class="stat-card new">
            <div class="stat-number">{{ stats.new }}</div>
            <div class="stat-label">New</div>
          </div>
          <div class="stat-card contacted">
            <div class="stat-number">{{ stats.contacted }}</div>
            <div class="stat-label">Contacted</div>
          </div>
          <div class="stat-card closed">
            <div class="stat-number">{{ stats.closed }}</div>
            <div class="stat-label">Closed</div>
          </div>
        </div>
        
        <!-- Inquiries Table -->
        <div class="inquiries-section">
          <div class="section-header">
            <h2>Contact Inquiries</h2>
            <button @click="fetchInquiries" class="btn btn-secondary">
              <span>Refresh</span>
            </button>
          </div>
          
          <div class="table-container">
            <table class="inquiries-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Service</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="inquiry in inquiries" :key="inquiry.id" class="inquiry-row">
                  <td>{{ formatDate(inquiry.created_at) }}</td>
                  <td>{{ inquiry.name }}</td>
                  <td>
                    <a :href="`mailto:${inquiry.email}`" class="email-link">
                      {{ inquiry.email }}
                    </a>
                  </td>
                  <td>
                    <a v-if="inquiry.phone" :href="`tel:${inquiry.phone}`" class="phone-link">
                      {{ inquiry.phone }}
                    </a>
                    <span v-else class="no-data">-</span>
                  </td>
                  <td>{{ formatService(inquiry.service) }}</td>
                  <td>
                    <select 
                      :value="inquiry.status" 
                      @change="updateStatus(inquiry.id!, ($event.target as HTMLSelectElement).value)"
                      class="status-select"
                      :class="inquiry.status"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="closed">Closed</option>
                    </select>
                  </td>
                  <td>
                    <button @click="showMessage(inquiry)" class="btn-small">
                      View Message
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div v-if="inquiries.length === 0 && !isLoading" class="no-data-message">
            No inquiries found.
          </div>
        </div>
      </div>
    </div>
    
    <!-- Message Modal -->
    <div v-if="selectedInquiry" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>Message from {{ selectedInquiry.name }}</h3>
          <button @click="closeModal" class="close-button">&times;</button>
        </div>
        <div class="modal-body">
          <div class="inquiry-details">
            <p><strong>Email:</strong> {{ selectedInquiry.email }}</p>
            <p v-if="selectedInquiry.phone"><strong>Phone:</strong> {{ selectedInquiry.phone }}</p>
            <p v-if="selectedInquiry.company"><strong>Company:</strong> {{ selectedInquiry.company }}</p>
            <p><strong>Service:</strong> {{ formatService(selectedInquiry.service) }}</p>
            <p><strong>Date:</strong> {{ formatDate(selectedInquiry.created_at) }}</p>
          </div>
          <div class="message-content">
            <h4>Message:</h4>
            <p>{{ selectedInquiry.message }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getApiUrl } from '@/utils/api'

interface ContactInquiry {
  id?: number
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  service?: string
  created_at: string
  status: 'new' | 'contacted' | 'closed'
}

const isAuthenticated = ref(false)
const loginPassword = ref('')
const loginError = ref('')
const isLoading = ref(false)
const authToken = ref('')

const inquiries = ref<ContactInquiry[]>([])
const selectedInquiry = ref<ContactInquiry | null>(null)
const stats = ref({
  total: 0,
  new: 0,
  contacted: 0,
  closed: 0
})

const login = async () => {
  isLoading.value = true
  loginError.value = ''
  
  try {
    const response = await fetch(`${getApiUrl()}/admin?action=auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password: loginPassword.value })
    })
    
    if (response.ok) {
      const data = await response.json()
      authToken.value = data.token
      isAuthenticated.value = true
      localStorage.setItem('adminToken', data.token)
      await fetchInquiries()
    } else {
      loginError.value = 'Invalid password'
    }
  } catch (error) {
    // Fallback for local development
    if (loginPassword.value === 'admin123') {
      authToken.value = 'local-dev-token'
      isAuthenticated.value = true
      localStorage.setItem('adminToken', 'local-dev-token')
      // Mock data for local development
      stats.value = { total: 0, new: 0, contacted: 0, closed: 0 }
      inquiries.value = []
    } else {
      loginError.value = 'Login failed. Use password: admin123'
    }
  } finally {
    isLoading.value = false
  }
}

const logout = () => {
  isAuthenticated.value = false
  authToken.value = ''
  localStorage.removeItem('adminToken')
  inquiries.value = []
  stats.value = { total: 0, new: 0, contacted: 0, closed: 0 }
}

const fetchInquiries = async () => {
  try {
    const response = await fetch(`${getApiUrl()}/admin?action=inquiries`, {
      headers: {
        'Authorization': `Bearer ${authToken.value}`
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      inquiries.value = data.inquiries
      stats.value = data.stats
    } else if (response.status === 401) {
      logout()
    }
  } catch (error) {
    console.log('API not available - using local development mode')
    // Load mock data and localStorage submissions for local development
    try {
      const mockResponse = await fetch('/inquiries.json')
      let mockData = []
      if (mockResponse.ok) {
        mockData = await mockResponse.json()
      }
      
      // Add localStorage submissions
      const localInquiries = JSON.parse(localStorage.getItem('localInquiries') || '[]')
      const allInquiries = [...mockData, ...localInquiries]
      
      inquiries.value = allInquiries.sort((a: any, b: any) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )
      
      stats.value = {
        total: allInquiries.length,
        new: allInquiries.filter((i: any) => i.status === 'new').length,
        contacted: allInquiries.filter((i: any) => i.status === 'contacted').length,
        closed: allInquiries.filter((i: any) => i.status === 'closed').length
      }
    } catch {
      inquiries.value = []
      stats.value = { total: 0, new: 0, contacted: 0, closed: 0 }
    }
  }
}

const updateStatus = async (id: number, status: string) => {
  try {
    const response = await fetch(`${getApiUrl()}/admin?action=status&id=${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken.value}`
      },
      body: JSON.stringify({ status })
    })
    
    if (response.ok) {
      const inquiry = inquiries.value.find(i => i.id === id)
      if (inquiry) {
        inquiry.status = status as ContactInquiry['status']
      }
      await fetchInquiries() // Refresh stats
    }
  } catch (error) {
    console.log('API not available - using local development mode')
    // Mock update for local development
    const inquiry = inquiries.value.find(i => i.id === id)
    if (inquiry) {
      inquiry.status = status as ContactInquiry['status']
    }
  }
}

const showMessage = (inquiry: ContactInquiry) => {
  selectedInquiry.value = inquiry
}

const closeModal = () => {
  selectedInquiry.value = null
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString()
}

const formatService = (service?: string) => {
  if (!service) return 'Not specified'
  return service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

onMounted(() => {
  const token = localStorage.getItem('adminToken')
  if (token) {
    authToken.value = token
    isAuthenticated.value = true
    fetchInquiries()
  }
})
</script>

<style scoped>
.admin-page {
  min-height: 100vh;
  background-color: var(--color-gray-light);
  padding-top: 70px;
}

.admin-header {
  background-color: var(--color-dark);
  color: var(--color-white);
  padding: 2rem 0;
}

.admin-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.admin-title {
  font-size: 2rem;
  font-weight: 700;
}

.login-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.login-card {
  background: var(--color-white);
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-card h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-dark);
}

.login-form .form-group {
  margin-bottom: 1.5rem;
}

.login-form label {
  display: block;
  font-weight: 500;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
}

.login-form input {
  width: 100%;
  padding: 12px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: var(--transition);
}

.login-form input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.login-form .btn {
  width: 100%;
  margin-top: 1rem;
}

.error-message {
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 4px;
  text-align: center;
}

.admin-dashboard {
  padding: 2rem 0;
}

.stats-grid {
  margin-bottom: 3rem;
}

.stat-card {
  background: var(--color-white);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.stat-card.new {
  border-left: 4px solid #28a745;
}

.stat-card.contacted {
  border-left: 4px solid var(--color-primary);
}

.stat-card.closed {
  border-left: 4px solid var(--color-gray);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-dark);
}

.stat-label {
  color: var(--color-gray);
  font-weight: 500;
  margin-top: 0.5rem;
}

.inquiries-section {
  background: var(--color-white);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.section-header h2 {
  color: var(--color-dark);
}

.table-container {
  overflow-x: auto;
}

.inquiries-table {
  width: 100%;
  border-collapse: collapse;
}

.inquiries-table th,
.inquiries-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e9ecef;
}

.inquiries-table th {
  background-color: var(--color-gray-light);
  font-weight: 600;
  color: var(--color-dark);
}

.inquiry-row:hover {
  background-color: #f8f9fa;
}

.email-link,
.phone-link {
  color: var(--color-primary);
  text-decoration: none;
}

.email-link:hover,
.phone-link:hover {
  text-decoration: underline;
}

.status-select {
  padding: 0.5rem;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  background-color: var(--color-white);
}

.status-select.new {
  color: #28a745;
}

.status-select.contacted {
  color: #ffc107;
}

.status-select.closed {
  color: var(--color-gray);
}

.btn-small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  background-color: var(--color-primary);
  color: var(--color-dark);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: var(--transition);
}

.btn-small:hover {
  background-color: #e6ac37;
}

.no-data,
.no-data-message {
  color: var(--color-gray);
  text-align: center;
  padding: 2rem;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: var(--color-white);
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e9ecef;
}

.modal-header h3 {
  color: var(--color-dark);
  margin: 0;
}

.close-button {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--color-gray);
}

.close-button:hover {
  color: var(--color-dark);
}

.modal-body {
  padding: 2rem;
}

.inquiry-details {
  margin-bottom: 2rem;
}

.inquiry-details p {
  margin-bottom: 0.5rem;
  color: var(--color-gray-dark);
}

.message-content h4 {
  color: var(--color-dark);
  margin-bottom: 1rem;
}

.message-content p {
  line-height: 1.6;
  color: var(--color-gray-dark);
  background: var(--color-gray-light);
  padding: 1rem;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .admin-header .container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .section-header {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .modal-content {
    width: 95%;
  }
  
  .modal-body {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>