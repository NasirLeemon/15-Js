const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
    },
    {
        id: 5,
        name: 'James anderson',
        job: 'the Swing boss',
        img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSnwt_udXoDAcck8irRM3aDzWNivq5pd_rhfaaOsckMsN5gNyN9Epm95PgwT1NTRzVmuDmRH0D9vlSYlNg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
      }, {
        id: 6,
        name: 'Daniel Craig',
        job: 'the boss',
        img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcS1Eb_SO3FEomlTOYNN4TX_yUKdTpAVniPpBy21aQbk_bDTVffgkbnKJtKBtkv3-qYx17iZH1sZMhKIb_U',
        text: ' looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their ',
      }, {
        id: 7,
        name: 'Bear Grylls',
        job: 'the boss',
        img: 'https://www.telegraph.co.uk/content/dam/travel/2021/08/20/TELEMMGLPICT000268550048_trans_NvBQzQNjv4BqBzUpKAt-W1616A1N6TKFY2QnZJIETfWB_fUbKb77n0w.jpeg',
        text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an',
      },
  ];


  const image = document.getElementById('person-img')
  const author = document.getElementById('author')
  const job = document.getElementById('job')
  const info = document.getElementById('info')

  const prevButton = document.querySelector('.prev-btn')
  const nextButton = document.querySelector('.next-btn')
  const randomButton = document.querySelector('.random-btn')


  let currentItem = 0

  window.addEventListener('DOMContentLoaded',function(){
    showPerson(currentItem)
  })

  nextButton.addEventListener('click', function(){
    currentItem++
    if (currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson(currentItem)
  })
  prevButton.addEventListener('click', function(){
    currentItem--
    if (currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson(currentItem)
  })

  function showPerson(person){
    const item = reviews[person]
    image.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
  }

  randomButton.addEventListener('click', function(){
    showPerson(randomNum())
  })

  function randomNum(){
    return Math.floor(Math.random() * reviews.length) 
  }