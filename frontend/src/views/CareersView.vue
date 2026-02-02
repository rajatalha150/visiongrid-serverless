<template>
  <div class="careers-page">
    <div class="page-hero">
      <div class="container">
        <h1 class="page-title">Join the VisionGrid Team</h1>
        <p class="page-subtitle">Build the future of secure infrastructure with us</p>
      </div>
    </div>
    
    <section class="section">
      <div class="container">
        <div class="intro-text text-center">
          <p>
            At VisionGrid, we don't just install technology; we build the nervous systems of modern businesses. 
            We are looking for dedicated problem-solvers who take pride in their craft. Whether you're pulling cable 
            or configuring a server, your work directly impacts the safety and efficiency of our community.
          </p>
        </div>

        <div class="jobs-grid">
          <div class="job-card" v-for="job in jobs" :key="job.id">
            <div class="job-header">
              <h3 class="job-title">{{ job.title }}</h3>
              <span class="job-type">{{ job.type }}</span>
            </div>
            <p class="job-description">{{ job.description }}</p>
            
            <div class="job-details">
              <h4>What You'll Do:</h4>
              <ul>
                <li v-for="(task, index) in job.responsibilities" :key="index">{{ task }}</li>
              </ul>
              
              <h4>Who You Are:</h4>
              <ul>
                <li v-for="(req, index) in job.requirements" :key="index">{{ req }}</li>
              </ul>
            </div>
            
            <div class="job-action">
              <RouterLink to="/contact" class="btn btn-primary">Apply Now</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const jobs = [
  {
    id: 1,
    title: 'Security Systems Technician',
    type: 'Full-time',
    description: 'We need a sharp eye and steady hand to bring our security designs to life. You will be the face of VisionGrid on-site, installing and configuring high-end surveillance systems that protect our clients assets.',
    responsibilities: [
      'Install, program, and calibrate IP and analog security cameras.',
      'Mount hardware professionally on various surfaces (drywall, concrete, exterior).',
      'Configure NVRs and remote viewing applications for clients.',
      'Troubleshoot image quality and connectivity issues on the fly.'
    ],
    requirements: [
      'Experience with power tools and ladder safety.',
      'Basic understanding of IP networking (you know what an IP address is).',
      'Clean driving record and ability to travel locally.',
      'A obsession with neat wire management.'
    ]
  },
  {
    id: 2,
    title: 'Low Voltage Cabling Specialist',
    type: 'Full-time',
    description: 'You are the backbone of our infrastructure projects. We are looking for someone who sees a messy server closet as a challenge, not a headache. You understand that a reliable network starts with physical layer perfection.',
    responsibilities: [
      'Run, terminate, and test Cat6, Coax, and Fiber optic cables.',
      'Dress and label cables in server racks for a "showroom quality" finish.',
      'Navigate crawl spaces and drop ceilings with care.',
      'Perform cable certification tests and document results.'
    ],
    requirements: [
      'Steady hands for precise termination (RJ45, Keystone).',
      'Comfortable working at heights (lifts and ladders).',
      'Ability to read floor plans and wiring schematics.',
      'Pride in leaving a job site cleaner than you found it.'
    ]
  },
  {
    id: 3,
    title: 'Windows System Administrator',
    type: 'Full-time',
    description: 'We need a digital mechanic to keep our clients environments running smoothly. You will be managing the Windows-based servers and workstations that power our integrated security and business systems.',
    responsibilities: [
      'Manage and maintain Windows Server environments (Active Directory, DNS, DHCP).',
      'Deploy security patches and system updates without disrupting operations.',
      'Manage user access controls and permissions.',
      'Troubleshoot OS-level issues and hardware compatibility.'
    ],
    requirements: [
      'Solid grasp of Windows Server 2019/2022 ecosystem.',
      'Experience with PowerShell scripting is a huge plus.',
      'Understanding of virtualization (Hyper-V or VMware).',
      'Patience to explain technical issues to non-technical users.'
    ]
  },
  {
    id: 4,
    title: 'Network Support Specialist',
    type: 'Full-time',
    description: 'If you love solving puzzles, this is for you. You will ensure that the data flows where it needs to go, securely and fast. You are the first line of defense against connectivity issues.',
    responsibilities: [
      'Configure routers, switches, and firewalls (VLANs, VPNs, Port Forwarding).',
      'Diagnose and resolve network bottlenecks and connectivity drops.',
      'Set up secure Wi-Fi networks for high-density environments.',
      'Monitor network health and respond to outages.'
    ],
    requirements: [
      'Understanding of the OSI model and TCP/IP fundamentals.',
      'Experience with Ubiquiti, Mikrotik, or Cisco gear.',
      'Analytical mindset for root-cause troubleshooting.',
      'Strong communication skills for remote support tickets.'
    ]
  },
  {
    id: 5,
    title: 'Field Service Technician (General IT)',
    type: 'Part-time / Contract',
    description: 'A versatile role for a jack-of-all-trades. One day you might be swapping a hard drive, the next you are helping a client recover a lost password. You are our rapid-response hero.',
    responsibilities: [
      'Perform on-site hardware repairs (PCs, Printers, POS systems).',
      'Assist with new workstation setups and cable management.',
      'Provide hands-on support for remote engineering teams.',
      'Document site configurations and inventory.'
    ],
    requirements: [
      'Broad knowledge of computer hardware and peripherals.',
      'Ability to think on your feet and improvise solutions.',
      'Professional demeanor and punctuality.',
      'Your own reliable set of basic IT tools.'
    ]
  }
]
</script>

<style scoped>
.careers-page {
  background-color: var(--bg-secondary);
  padding-bottom: 4rem;
}

.page-hero {
  background: var(--bg-secondary);
  color: var(--color-white);
  padding: 120px 0 80px;
  text-align: center;
  margin-top: 70px;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.page-subtitle {
  font-size: 1.3rem;
  color: var(--color-gray-dark);
  font-weight: 500;
}

.intro-text {
  max-width: 800px;
  margin: 0 auto 4rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-gray);
}

.jobs-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.job-card {
  background: #cbd5e1;
  border-radius: var(--radius-lg);
  padding: 2rem;
  border: 1px solid var(--border-color);
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
}

/* Dark mode override */
:root[class~="dark"] .job-card {
  background: var(--bg-card);
}

.job-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.job-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
}

.job-type {
  background: var(--bg-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-primary);
  border: 1px solid var(--border-color);
}

.job-description {
  color: var(--color-gray);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.job-details h4 {
  font-size: 1.1rem;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
  font-weight: 600;
}

.job-details ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.job-details li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-gray);
  line-height: 1.5;
}

.job-details li::before {
  content: "•";
  color: var(--color-primary);
  position: absolute;
  left: 0;
  font-weight: bold;
}

.job-action {
  margin-top: 2rem;
  text-align: right;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .job-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .job-action {
    text-align: left;
  }
}
</style>