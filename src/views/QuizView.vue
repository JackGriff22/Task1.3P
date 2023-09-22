<script setup>
  
  import {ref, computed} from 'vue'

  const questions =  ref([
  {
    question: 'What is my MOST profficient programming language?',
    answer: 2,
    options: [
      'MySQL',
      'HTML',
      'Python',
      'English'
    ],
    selected: null
  },
  {
    question: 'Where am I currrently employed?',
    answer: 3, 
    options: [
      'McDonalds',
      'Air Force',
      'Google',
      'The Good Guys'
    ],
    selected: null
  },
  {
    question: 'What career path do I want to take and end up at?',
    answer: 1, 
    options: [
      'Google',
      'Air Force',
      'The Good Guys IT',
      "Jim's Mowing"
    ],
    selected: null
  },
  {
    question: 'What is one of my hobbies?',
    answer: 0, 
    options: [
      'Snowboarding',
      'Playing Piano',
      'Skiing',
      'Reading'
    ],
    selected: null
  },
  {
    question: 'Where am I currently studying?',
    answer: 2, 
    options: [
      'RMIT',
      'La Trobe',
      'Deakin',
      'Home School'
    ],
    selected: null
  }

]);

const quizCompleted = ref(false)
const currentQuestion = ref(0)
const score = computed(() => {
	let value = 0
	questions.value.map(q => {
		if (q.selected != null && q.answer == q.selected) {
			console.log('correct');
			value++
		}
	})
	return value
})

const getCurrentQuestion = computed(() => {
	let question = questions.value[currentQuestion.value]
	question.index = currentQuestion.value
	return question
})

const SetAnswer = (evt) => {
	questions.value[currentQuestion.value].selected = evt.target.value
	evt.target.value = null
}

const NextQuestion = () => {
	if (currentQuestion.value < questions.value.length - 1) {
		currentQuestion.value++
		return
	}
	
	quizCompleted.value = true
}
</script>  


<template>
	<main class="myQuiz">
		<br><br><br>
    <h1 class="heading"> -- The Quiz -- </h1>
		
		<section class="Quiz" v-if="!quizCompleted">
			<div class="quiz-info">
				<span class="question">{{ getCurrentQuestion.question }}</span>
				<span class="score">Score {{ score }}/{{ questions.length }}</span>
			</div>
			
			<div class="quizOptions">
				<label 
					v-for="(option, index) in getCurrentQuestion.options" 
					:for="'option' + index" 
					:class="`option ${
						getCurrentQuestion.selected == index 
							? index == getCurrentQuestion.answer 
								? 'correct' 
								: 'wrong'
							: ''
					} ${
						getCurrentQuestion.selected != null &&
						index != getCurrentQuestion.selected
							? 'disabled'
							: ''
					}`">
					<input 
						type="radio" 
						:id="'option' + index" 
						:name="getCurrentQuestion.index" 
						:value="index" 
						v-model="getCurrentQuestion.selected" 
						:disabled="getCurrentQuestion.selected"
						@change="SetAnswer" 
					/>
					<span>{{ option }}</span>
				</label>
			</div>
			
			<button 
				@click="NextQuestion" 
				:disabled="!getCurrentQuestion.selected">
				{{ 
					getCurrentQuestion.index == questions.length - 1 
						? 'Finish' 
						: getCurrentQuestion.selected == null
							? 'Select an option'
							: 'Next question'
				}}
			</button>
		</section>

		<section class="finished" v-else>
			<h2 style="background-color: rgb(246, 192, 159); border-radius: 0.5rem;">You have finished the quiz!</h2>
			<h2 style="background-color: rgb(246, 192, 159); border-radius: 0.5rem;">Your score is {{ score }}/{{ questions.length }}</h2>
		</section>
	</main>
</template>

<style>
  .app{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    min-height: 100vh;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .finished {
    background-color: rgb(195, 126, 84);
    padding: 1rem;
    width: 100%;
    max-width: 640px;
    border-radius: 0.5rem;
    
  }
  .heading {
    margin-left: 5.5rem;
    text-align: center;
    background-color: rgb(246, 192, 159);
    width: 100%;
    max-width: 440px;
    border-radius: 0.5rem;
  }
  .Quiz {
    background-color: rgb(195, 126, 84);
    padding: 1rem;
    width: 100%;
    max-width: 640px;
    border-radius: 0.5rem;
  }
  .quiz-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .quiz-info .question {
    color: #000;
    font-size: 1.5rem;
  }

  .quiz-info .score {
    color: #000;
    font-size: 1.5rem;
  }

  .quizOptions {
    margin-bottom: 1rem;
  }

  .option {
    display: block;
    padding: 1rem;
    background-color: rgb(246, 192, 159);
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  .option:hover {
    background-color: rgb(255, 145, 0);
  }

  .option.correct {
    background-color: #2cce7d;
  }

  .option.wrong {
    background-color: #ff5a5f;
  }

  .option:last-of-type {
    margin-bottom: 0;
  }

  .option.disabled {
    opacity: 0.5;
  }

  .option input {
    display: none;
  }

  button {
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    background-color: #2cce7d;
    color: maroon;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.25rem;
    border-radius: 0.5rem;
  }

  button:disabled {
    opacity: 0.5;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }


</style>