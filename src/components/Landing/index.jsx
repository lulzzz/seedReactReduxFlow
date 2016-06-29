import React from 'react'
import { Link } from "react-router"

// Payment
import _PricingPlan from '../Payment/PricingPlan.jsx'
import _PricingTable from '../Payment/PricingTable.jsx'
import { basicPlan, standardPlan, premiumPlan } from '../Payment/plans.js'

import _Page from './Page.jsx'
import _NavBar from './NavBar.jsx'
import _Hero from './Hero.jsx'
import _PressList from './PressList.jsx'
import _PressListItem from './PressListItem.jsx'
import _Thumbnail from './Thumbnail.jsx'
import _Grid from './Grid.jsx'
import _CustomerQuote from './CustomerQuote.jsx'
import _CustomerQuotes from './CustomerQuotes.jsx'
import _Doctor from './Doctor.jsx'
import _Doctors from './Doctors.jsx'
import _Footer from './Footer.jsx'


export default class Landing extends React.Component {
	constructor() {
		super()
		this.register.bind(this)
		this.login.bind(this)
	}

	register() {
		console.log('register')
	}

	login() {
		console.log('login')
	}

	render() {
		return (
			<_Page>
				<_NavBar brandName={brandName}/>
				<_Hero backgroundImage="assets/img/hero-bg.jpg"/>

        		<_PressList centered>
          			<_PressListItem src="assets/img/press/LeFigaro.jpeg" url="http://sante.lefigaro.fr/actualite/2015/05/13/23719-medecin-bout-fil-loffre-daxa-qui-inquiete-lordre"/>
          			<_PressListItem src="assets/img/press/UFC.png" url="https://www.quechoisir.org/actualite-teleconsultation-axa-se-lance-dans-la-medecine-n2773/"/>
          			<_PressListItem src="assets/img/press/JDN.png" url="http://www.journaldunet.com/economie/sante/1173877-e-sante-le-business-de-la-teleconsultation-debarque-en-france/"/>
          			<_PressListItem src="assets/img/press/BFM.jpeg" url="http://bfmbusiness.bfmtv.com/entreprise/besoin-d-un-medecin-axa-assure-une-consultation-par-telephone-884822.html"/>
          			<_PressListItem src="assets/img/press/QuotidienMed.jpeg" url="http://www.lequotidiendumedecin.fr/actualites/article/2015/09/18/un-nouveau-service-de-teleconsultation-medicale-en-france-_770851"/>
        		</_PressList>


        		<_Grid>
        			<_Thumbnail text="Doctors on demand!" src="assets/img/grid/SkypeDoctor.png" buttonText="See a doctor"/>
        			<_Thumbnail text="Any doubt? Ask us!" src="assets/img/grid/Symptoms.png" buttonText="Check symptoms"/>
        			<_Thumbnail text="Prescriptions delivered!" src="assets/img/grid/Prescription.png" buttonText="More info"/>
        			<_Thumbnail text="Access your medical record online!" src="assets/img/grid/medical-record.png" buttonText="More info"/>
        			<_Thumbnail text="Monitor your health!" src="assets/img/grid/healthMonitor.png" buttonText="More info"/>
        			<_Thumbnail text="Test yourself @Home!" src="assets/img/grid/testKit.png" buttonText="Order now"/>
        		</_Grid>

        		<section className="pricing">
					<h1 className="display-4 pricing-title">Check our plans</h1>
					<_PricingTable>
				      	<_PricingPlan {... basicPlan} />
				      	<_PricingPlan {... standardPlan} />
				      	<_PricingPlan {... premiumPlan} />
	        		</_PricingTable>
	        	</section>


        		<_CustomerQuotes>
        			<_CustomerQuote {... customer1} />
        			<_CustomerQuote {... customer2} />
        			<_CustomerQuote {... customer3} />
        		</_CustomerQuotes>


        		<_Doctors>
        			<_Doctor {... doctor1} />
        			<_Doctor {... doctor2} />
        			<_Doctor {... doctor3} />
        		</_Doctors>

        		<_Footer 
        			brandName={brandName}
        			linkedinUrl="https://www.linkedin.com"
					facebookUrl="https://www.facebook.com"
					twitterUrl="https://www.twitter.com"
					googlePlusUrl="https://plus.google.com/"
					githubUrl="https://github.com/kametventures"
					address={businessAddress}
					email="alexandre.brel@kametventures.com">
				</_Footer>

			</_Page>

		)
	}
}

const brandName = "Karma"

const customer1 = {
	quote: 	'I woke up feeling really unwell.' +
		' Usually, I would have to compete for an appointment when my surgery opens first thing,' +
		' instead I booked a ten minute video consultation at eight o\'clock and picked up' +
		' a prescription during my lunch break.' +
		' Why would I ever do anything else?',
	name: 'Pierre',
	city: 'London',
	rating: 5,
	photo: 'assets/img/customers/PA.jpg'
}


const customer2 = {
	quote: 	'I am a full-time working mum juggling with a busy schedule.' +
		' My employer offered Karma as a benefit.' +
		' Karma provided a convenient and flexible way for me to consult a GP' +
		' about my child without having to take a day off work.',
	name: 'Anna',
	city: 'Paris',
	rating: 5,
	photo: 'assets/img/customers/Anna.jpg'
}


const customer3 = {
	quote: 	'On Saturday night, I was having a problem with painful redness in my eye.' +
		' I needed a quick fix but the GP was closed.' +
		' My friend recomended Karma.' +
		' I had a video consultation and picked up antibiotics within the hour',
	name: 'Marie',
	city: 'Lyon',
	rating: 5,
	photo: 'assets/img/customers/Marie.jpg'
}



const doctor1 = {
	quote: 	'I\'m passionate about being a GP and also about using technology to improve health, so I\'m thrilled to be part of the Karma team delivering revolutionary, high quality medical care when and where it is needed. Not in the future, but right now.',
	name: 'Dr. Nicolas Wolikow',
	photo: 'assets/img/doctors/NW.jpg'
}


const doctor2 = {
	quote: 	'Karma is an innovative service for busy individuals who need to see a doctor when it suits them. To be part of this health revolution is exciting and seeing Karma’s growth is testament to the high quality service it provides.',
	name: 'Dr. Aymeric Souleau',
	photo: 'assets/img/doctors/AS.jpg'
}


const doctor3 = {
	quote: 	'Karma is an excellent way to get an answer to a medical question that you’ve always wanted to ask. I relish the opportunity to provide a great service to patients that is not limited by a practice boundary.',
	name: 'Dr. Alexandre Brel',
	photo: 'assets/img/doctors/AB.jpg'
}

const businessAddress = (
	<address>
		<strong>{brandName}</strong><br/>
		30 rue de Fortuny<br/>
		Paris, 75017<br/>
		+33 6 52 58 06 64
	</address>
)












