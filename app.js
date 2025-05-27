const additionalTrophies = [
    {
        name: "1X Fifa Puskas Award",
        years: "<br>2009",
        image: "H:\\project 12\\html-css-js-website-smooth-scroll\\images\\puskas.jpg"
    },
    {
        name: "4X Golden Boot",
        years: "<br>2007/2008 Manchester United <br>2010/2011 Real Madrid <br> 2013/2014 Real Madrid <br> 2014/2015 Real Madrid",
        image: "H:\\project 12\\html-css-js-website-smooth-scroll\\images\\golden.webp"
    },
    {
      name: "4X UEFA Best Player",
      years: "<br>2008 Manchester United <br>2014 Real Madrid <br> 2016 Real Madrid <br> 2017 Real Madrid",
      image: "H:\\project 12\\html-css-js-website-smooth-scroll\\images\\best1.jpg"
  
  },
  {
    name: "4X Fifa Club World Cup",
    years: "<br>2009 Manchester United <br>2015 Real Madrid <br> 2017 Real Madrid <br> 2018 Real Madrid",
    image: "H:\\project 12\\html-css-js-website-smooth-scroll\\images\\worldcup.jpg"
  
  }
  ];
  
  document.getElementById('more-trophies').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the anchor link default action
    const wrapper = document.querySelector('.Trophies__wrapper');
  
    additionalTrophies.forEach(trophy => {
        const card = document.createElement('div');
        card.className = 'Trophies__card';
        card.setAttribute('data-trophy', trophy.name);
        card.setAttribute('data-in', trophy.years);
        card.innerHTML = `
        <img src="${trophy.image}" alt="${trophy.name}" class="trophy-image">
            <h2>${trophy.name}</h2>
        `;
        wrapper.appendChild(card);
    });
  
    // Remove the button after adding new trophies to prevent multiple additions
    this.style.display = 'none';
  
    // Adding event listeners to new cards
    attachClickEventToCards();
  });
  
  function attachClickEventToCards() {
    document.querySelectorAll('.Trophies__card').forEach(card => {
        card.addEventListener('click', function() {
            const trophyName = this.getAttribute('data-trophy');
            const trophyDetails = this.getAttribute('data-in');
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h2>${trophyName}</h2>
                    <h4>${trophyDetails}</h4>
                </div>
            `;
            document.body.appendChild(modal);
  
            // Show modal
            modal.classList.add('active');
  
            // Close modal on click of 'close' span
            modal.querySelector('.close').addEventListener('click', () => {
                modal.classList.remove('active');
                setTimeout(() => modal.remove(), 500); // Allow transition to finish
            });
        });
    });
  }
  document.addEventListener('DOMContentLoaded', attachClickEventToCards);
  
    
  