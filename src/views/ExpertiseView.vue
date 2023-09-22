
<template>
    <br>
    <h1 style="text-decoration: underline; text-decoration-thickness: 2.5px ; color:rgb(195, 85, 18);">My Technical Skills</h1>
    <p>I am prficient in a few programming languages. They are listed below in order of most proficient.</p>
    <ul>
        <li>Python</li>
        <li>Java</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>MySQL</li>
    </ul>
    <br><br>
    <h1 style="text-decoration: underline; text-decoration-thickness: 2.5px ; color:rgb(195, 85, 18);">An Example</h1>
    <br>
    <button @click="showProjects" style="background-color: rgb(246, 192, 159);">View My Projects</button>
    <div class="projects" v-if="projectsVisible">
        <h2>My Projects</h2>
        <ul>
            <li>
                <h3>
                    <a href="https://github.com/JackGriff22/Task1.1P.git" target="_blank"> Project 1 </a>
                    <!--image-->
                </h3>
                <p>In this project I created a Bakery webpage utilising multiple pages detailing different products and information about the Bakery. 
                    I used HTML and CSS.
                </p>
            </li>
            <li>
                <h3>
                    <a href="https://github.com/JackGriff22/Task1.2P.git" target="_blank"> Project 2 </a>
                </h3>
                <p>This project I created a basic webpage using HTML, CSS and JavaScript. I implemented responsive design into the page.</p>
            </li>
        </ul>
    </div>
</template>
<script setup>
    import {ref} from 'vue';

    const projectsVisible = ref(false);

    const showProjects = () => {
        projectsVisible.value = true;
    };
</script>
