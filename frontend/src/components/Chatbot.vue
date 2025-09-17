<template>
  <div class="chatbot-container">
    <!-- Chat Toggle Button -->
    <button 
      class="chat-toggle" 
      @click="toggleChat"
      :class="{ active: isOpen }"
      aria-label="Toggle chat"
    >
      <span v-if="!isOpen">💬</span>
      <span v-else>✕</span>
    </button>

    <!-- Chat Window -->
    <div class="chat-window" :class="{ open: isOpen }">
      <div class="chat-header">
        <h3>VisionGrid Assistant</h3>
        <button @click="toggleChat" class="close-btn">✕</button>
      </div>
      
      <div class="chat-messages" ref="messagesContainer">
        <div class="message bot-message">
          <div class="message-content">
            Hello! I'm VisionGrid's virtual assistant. I can help you with information about our security services, pricing, appointments, and more. What would you like to know?
          </div>
        </div>
        
        <div 
          v-for="(message, index) in messages" 
          :key="index"
          class="message"
          :class="message.role === 'user' ? 'user-message' : 'bot-message'"
        >
          <div class="message-content">{{ message.content }}</div>
        </div>
        
        <div v-if="isLoading" class="message bot-message">
          <div class="message-content typing">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
      
      <div class="chat-input">
        <input 
          v-model="currentMessage"
          @keypress.enter="sendMessage"
          placeholder="Ask about our services, pricing, or schedule a consultation..."
          :disabled="isLoading"
        />
        <button @click="sendMessage" :disabled="isLoading || !currentMessage.trim()">
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted } from 'vue'
import { sendChatMessage } from '@/utils/api'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

const isOpen = ref(false)
const messages = ref<ChatMessage[]>([])
const currentMessage = ref('')
const isLoading = ref(false)
const messagesContainer = ref<HTMLElement>()
const knowledge = ref<any>({})

onMounted(async () => {
  try {
    const response = await fetch('/chatbot-knowledge.json')
    knowledge.value = await response.json()
  } catch (error) {
    console.log('Using fallback responses')
  }
})

const toggleChat = () => {
  isOpen.value = !isOpen.value
}

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const sendMessage = async () => {
  if (!currentMessage.value.trim() || isLoading.value) return
  
  const userMessage = currentMessage.value.trim()
  messages.value.push({ role: 'user', content: userMessage })
  currentMessage.value = ''
  isLoading.value = true
  
  await scrollToBottom()
  
  try {
    const data = await sendChatMessage(userMessage, messages.value)
    messages.value.push({ role: 'assistant', content: data.response })
    
  } catch (error) {
    console.error('Chat error:', error)
    // Local development fallback
    const response = getLocalResponse(userMessage)
    messages.value.push({ role: 'assistant', content: response })
  } finally {
    isLoading.value = false
    await scrollToBottom()
  }
}

const getLocalResponse = (message: string): string => {
  const msg = message.toLowerCase()
  const kb = knowledge.value
  
  if (msg.includes('hello') || msg.includes('hi')) {
    return "Hello! I'm VisionGrid's virtual assistant. I can help you with information about our security services, pricing, appointments, and more. What would you like to know?"
  }
  
  if (msg.includes('service') || msg.includes('what do you do')) {
    const services = Object.values(kb.services || {}).map((s: any) => s.name).join(', ')
    return `VisionGrid offers comprehensive security solutions including: ${services}. We have ${kb.company?.experience} of experience with ${kb.company?.installations} installations completed. Which service interests you most?`
  }
  
  if (msg.includes('camera') || msg.includes('surveillance')) {
    const service = kb.services?.camera_installation
    if (service) {
      return `Our Camera Installation service includes ${service.features.join(', ')}. Pricing ranges from ${service.pricing.basic_package} for basic packages to ${service.pricing.premium_package} for premium setups. Would you like to schedule a free consultation?`
    }
  }
  
  if (msg.includes('network') || msg.includes('wifi')) {
    const service = kb.services?.networking_solutions
    if (service) {
      return `Our Networking Solutions include ${service.features.join(', ')}. Home network setups start at ${service.pricing.home_network}, business networks at ${service.pricing.business_network}.`
    }
  }
  
  if (msg.includes('price') || msg.includes('cost')) {
    const services = kb.services || {}
    let pricing = 'Our pricing varies by service:\n\n'
    Object.values(services).forEach((service: any) => {
      const prices = Object.values(service.pricing || {}).filter(p => p !== 'Custom quote')
      if (prices.length > 0) {
        pricing += `• ${service.name}: ${prices.join(' to ')}\n`
      }
    })
    pricing += '\nAll prices include professional installation. Contact us for a free consultation!'
    return pricing
  }
  
  if (msg.includes('appointment') || msg.includes('consultation')) {
    const appt = kb.appointments?.consultation
    if (appt) {
      return `We offer ${appt.type} lasting ${appt.duration}. ${appt.description}. We're available ${appt.availability}. You can schedule through our contact form.`
    }
  }
  
  // Check FAQ
  const faq = kb.faq || []
  for (const item of faq) {
    if (msg.includes(item.question.toLowerCase().split(' ').slice(0, 3).join(' '))) {
      return item.answer
    }
  }
  
  return "I can help with information about our security services, pricing, appointments, and more. Try asking about our services, pricing, or scheduling a consultation!"
}
</script>

<style scoped>
.chatbot-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.chat-toggle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--gradient-primary);
  border: none;
  color: var(--color-dark);
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(255, 192, 61, 0.3);
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(255, 192, 61, 0.4);
}

.chat-toggle.active {
  background: var(--color-dark);
  color: var(--color-white);
}

.chat-window {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 350px;
  height: 500px;
  background: var(--color-white);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  transform: translateY(20px) scale(0.95);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.chat-window.open {
  transform: translateY(0) scale(1);
  opacity: 1;
  visibility: visible;
}

.chat-header {
  padding: 1rem;
  background: var(--gradient-primary);
  color: var(--color-dark);
  border-radius: 12px 12px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-header h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.close-btn {
  background: none;
  border: none;
  color: var(--color-dark);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-messages {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.message {
  display: flex;
}

.user-message {
  justify-content: flex-end;
}

.bot-message {
  justify-content: flex-start;
}

.message-content {
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: 18px;
  line-height: 1.4;
  font-size: 0.9rem;
}

.user-message .message-content {
  background: var(--gradient-primary);
  color: var(--color-dark);
  border-bottom-right-radius: 4px;
}

.bot-message .message-content {
  background: var(--color-gray-light);
  color: var(--color-dark);
  border-bottom-left-radius: 4px;
}

.typing {
  display: flex;
  align-items: center;
  gap: 4px;
}

.typing span {
  width: 6px;
  height: 6px;
  background: var(--color-gray);
  border-radius: 50%;
  animation: typing 1.4s infinite ease-in-out;
}

.typing span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-10px);
  }
}

.chat-input {
  padding: 1rem;
  border-top: 1px solid var(--color-gray-light);
  display: flex;
  gap: 0.5rem;
}

.chat-input input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid var(--color-gray-light);
  border-radius: 20px;
  outline: none;
  font-size: 0.9rem;
}

.chat-input input:focus {
  border-color: var(--color-primary);
}

.chat-input button {
  padding: 0.75rem 1.5rem;
  background: var(--gradient-primary);
  color: var(--color-dark);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: var(--transition);
}

.chat-input button:hover:not(:disabled) {
  transform: translateY(-1px);
}

.chat-input button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .chatbot-container {
    bottom: 15px;
    right: 15px;
  }
  
  .chat-window {
    width: 300px;
    height: 450px;
    bottom: 70px;
  }
  
  .chat-toggle {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .chat-window {
    width: calc(100vw - 30px);
    right: -15px;
  }
}
</style>