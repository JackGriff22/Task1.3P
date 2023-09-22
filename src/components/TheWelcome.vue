<script setup>
import WelcomeItem from './WelcomeItem.vue'
import GeneralIcon from './icons/IconGeneral.vue'
import AmbitionIcon from './icons/IconAmbition.vue'
import EducationIcon from './icons/IconEducation.vue'
import ContactInfoIcon from './icons/IconContactInfo.vue'

</script>
<style>
  table, th, td {
    border:1px solid black;
  }
</style>
<template>
  <br>
  <WelcomeItem>
    <template #icon>
      <GeneralIcon />
    </template>
    <template #heading>General</template>
    <p>Hi there! my name is Jack, I am a University student at Deakin, Warun Ponds campus. <br>
      I am creating this portfolio to detail some interesting points about myself to give you, the reader a better understanding about me. <br>
      I have lived in Victoria, Australia my whole life and always had an affinity for computers and how they worked. <br> Naturally choosing a job in this field would be best suited to me. <br>
      </p>
    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <AmbitionIcon />
    </template>
    <template #heading>My Ambitions</template>
    <p>After I have finished my studies with Deakin, I plan to apply for the Air Force. <br>
      There is a position title of "Cyberspace Warefare Officer" that I am very interested in.<br>
      If accepted, I plan to stay in this role for a few years, gaining valuable knowledge and skills. <br>
      After finishing my time in the Air Force, I plan to join a large company or organisation as a Cybersecurity Head.</p>
    
    <br/>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EducationIcon />
    </template>
    <template #heading>Hobbies</template>
    <p>In my free time, when I'm not working or studying, I like to:</p>
    <ul>
      <li>Play the Guitar</li>
      <li>Snowboard</li>
      <li>Playstation</li>
      <li>Surf</li>
      <li>Catch up with friends</li>
    </ul>
    
  </WelcomeItem>


  <WelcomeItem>
    <template #icon>
      <ContactInfoIcon />
    </template>
    <template #heading>Get In Contact Wtih Me</template>
    <p>If you have any questions. Feel free to reach out to me in one of the following methods:</p>
    <br>
    <table style="width:450px">
                <tr>
                    <th>Personal Phone</th>
                    <th>0436 286 967</th>
                </tr>
                <tr>
                    <td>Personal Email</td>
                    <td>Jack.Griffo22@gmail.com</td>
                </tr>
                <tr>
                    <td>Work Phone</td>
                    <td>03 5249 4000</td>
                </tr>
                <tr>
                    <td>Work Email</td>
                    <td>Jackgriffiths015@thegoodguys.com.au</td>
                </tr>
                <tr>
                    <td>Mail</td>
                    <td>15 Vienet Avenue, Armstrong Creek</td>
                </tr>
            </table>


  </WelcomeItem>
</template>
