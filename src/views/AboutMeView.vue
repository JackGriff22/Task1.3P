

<template>
    <br><br>
	<h1 style="text-decoration: underline; text-decoration-thickness: 2.5px ; color:rgb(195, 85, 18);">Education</h1>
    <h3 style="color: rgb(195, 126, 84);">Australian Defence Force Junortoun - Army Cadet 2014-2016</h3>
    When i was a[part of the Army Cadets, we had to learn how to work together as part of a team through training exercises in the wilderness. 
    <p>We were also taught disipline and order.</p>
    <h3 style="color: rgb(195, 126, 84);">Bendigo Senior Secondary College - VCE 2018-2019</h3>
    My VCE studies were conducted at BSSC. The subjects I was enrolled in were: 
    <ul>
        <li>English</li>
        <li>Math Methods</li>
        <li>Further Mathematics</li>
        <li>Chemistry</li>
        <li>Biology</li>
        <li>Allied Health</li>
        <li>Psychology</li>
    </ul>
    <h3 style="color: rgb(195, 126, 84);">La Trobe University – Bachelor of Information Technology 2020 – mid 2021</h3>
    I had progressed through a year and a half, my degree at Lat Trobe was half complete but due to unfortunate circumstances I decided to take a gap year. I was taught and had experience in Python, Java, JavaScript, CLisp, HTML and SQL. 
    <h3 style="color: rgb(195, 126, 84);">Deakin University – Bachelor of Information Technology 2023</h3>
    After some time and moving to Geelong, I decided to go back to my studies and complete my degree. I got a recognition of prior learning to bring what I had learnt at La Trobe across. I am currently still studying at Deakin and plan to finish at the end of 2025.
    <br><br>
    <h1 style="text-decoration: underline; text-decoration-thickness: 2.5px ; color:rgb(195, 85, 18);">Achievements</h1>
    <ul>
        <li>During year 11 Chemistry, I was getting top grades for my class and was invited to attend a high achieving Chemistry test out of state.</li>
        <li>I remained loyal to my first job at McDonalds for four and a half years until I had to resigned because I relocated for to Deakin University in Geelong.</li>
        <li>I then and currently am working at The Good Guys Geelong as a salesperson while I study.</li>
    </ul>
    <br>
    <h1 style="text-decoration: underline; text-decoration-thickness: 2.5px ; color:rgb(195, 85, 18);">Employment</h1>
    <h3 style="color: rgb(195, 126, 84);">The Good Guys – 2021 – Currently</h3>
    <h3 style="color: rgb(195, 126, 84);">Responsibilities:</h3>
    <ul>
        <li>As a salesperson I have sale targets to reach, as well as this target I must sell a certain amount of warranties and offer Telstra connections to my customers.</li>
        <li>I make sure my department (TVs) is clean, dusted and all correct catalogue tickets are displayed with correct pricing for the week.</li>
        <li>I must be efficient and make sure all details are correct on my dockets is correct so as delivery and install processes go smoothly.</li>
        <li>I am required to be diligent and keep track of my active dockets as some customers will have items on backorder and I need to secure them when they reach our warehouses. </li>
        <li>I am required to have great team skills as there may be a sale that has items from departments all over the store, so smooth hand offs and team selling is required.</li>
    </ul>
    <br>
    <h3 style="color: rgb(195, 126, 84);">McDonalds- Crew Member- 2016 – 2020 (Four and a half years)</h3>
    <h3 style="color: rgb(195, 126, 84);">Responsibilities:</h3>
    <ul>
        <li>Providing a positive customer experience to numerous and varied people.</li>
        <li>Timely and accurate delivery of orders, working to tight deadlines.</li>
        <li>Being a pro-active team player that works collaboratively with others.</li>
        <li>Ensuring a clean and hygienic kitchen for safe food preparation.</li>
        <li>Working with leaders to ensure a safe working environment for myself and others.</li>
    </ul>
    <br>
    <h3 style="color: rgb(195, 126, 84);">Bricklayer- Labourer - 2016</h3>
    <h3 style="color: rgb(195, 126, 84);">Responsibilities:</h3>
    <ul>
        <li>Being on time to the site for early starts (6am).</li>
        <li>Maintaining a clean and tidy workstation free of hazards.</li>
        <li>Working long hours (up to 10 hours) whilst maintaining a quality output.</li>
    </ul>

    <br><br>

    <button class="download-btn" @click="downloadFile" style="background-color: rgb(246, 192, 159)">Download My Resume</button>

</template>

<script setup>
    import { saveAs } from 'file-saver';

    const downloadFile = () => {
        const filePath = 'Task1/task1.3p/vue/src/JacksResume.pdf';

        fetch(filePath)
            .then(response => response.blob())
            .then(blob => {
                saveAs(blob, 'JacksResume.pdf');
            });
    };
    
</script>