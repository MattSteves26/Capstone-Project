const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible = user.name.toLowerCase().includes(value) || user.team.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})



       function Stats2023(){
          fetch("http://localhost:3000/Players")
             .then(res => res.json())
             .then(data => {
              users = data.map(user => {
                const card = userCardTemplate.content.cloneNode(true).children[0]
                const header = card.querySelector("[data-header]")
                const body = card.querySelector("[data-body]")
                header.textContent = user.name

                if(user.s == 's')
                {
                body.textContent = user.team + "  Goals,Assists,Points: " + user.g + "," + user.a + "," + user.p
                }
                else
                {
                body.textContent = user.team
                }
                userCardContainer.append(card)
                return{ name: user.name, team: user.team, element: card}
                })
               })

      }

      function Stats2022(){
           fetch("http://localhost:3000/Players")
             .then(res => res.json())
             .then(data => {
               users = data.map(user => {
                 const card = userCardTemplate.content.cloneNode(true).children[0]
                 const header = card.querySelector("[data-header]")
                 const body = card.querySelector("[data-body]")
                 header.textContent = user.name

                 if(user.s == 's')
                 {
                 body.textContent = user.team + "  Goals,Assists,Points: " +`${user.s2022}`
                 }
                 else
                 {
                 body.textContent = user.team
                 }
                 userCardContainer.append(card)
                 return{ name: user.name, team: user.team, element: card}
               })
             })
      }


