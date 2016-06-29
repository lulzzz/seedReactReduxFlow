import { browserHistory } from 'react-router'

let onClick = (e) => {
  e.preventDefault
  browserHistory.push('/Login')
}

export let basicPlan = {
  name: 'Basic',
  description: 'Doctors at your fingertips when needed',
  price: '€9.99',
  buttonText: 'Purchase',
  features: [
    '24/7 secured access to a certified GP',
    'Have prescription sent to your nearest pharmacy, your home or your office',
    'Up to 4 consultations a year'
  ],
  onClick: onClick
}

export let standardPlan = Object.assign({}, basicPlan, {
  name: 'Standard',
  description: 'Unlimited access for yourself',
  price: '€19.99',
  features: [
    '24/7 secured access to a certified GP',
    'Have prescription sent to your nearest pharmacy, your home or your office',
    'Unlimited access'
  ],
  onClick: onClick
})

export let premiumPlan = Object.assign({}, basicPlan, {
  name: 'Premium',
  description: 'Unlimited access for your whole family',
  price: '€29.99',
  features: [
    '24/7 secured access to a certified GP',
    'Have prescription sent to your nearest pharmacy, your home or your office',
    'Unlimited access for your family'
  ],
  onClick: onClick
})
