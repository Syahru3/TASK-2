class Testimonial {
    
    constructor(image , content, author) {
        this.image = image
        this.content = content
        this.author = author
    }

    html() {
        return `
            <div class="card-content1">
                <div class="card">
                    <img class="card-image"
                    src="${this.image}" 
                    alt="image"
                    >       
            
                    <p class="card-p">
                    ${this.content}
                    </p>

                    <a href="google.com"; class="card-link">
                        <h1 class="card-h1">${this.author}</h1>
                    </a>
                </div>
            </div>
        `
    }
}

const testimonial1 = new Testimonial ("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fchild%2F&psig=AOvVaw1SvQaqkQoYdKd_zbI-nnQS&ust=1722006304428000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjMpMW7wocDFQAAAAAdAAAAABAE" 
, "mantap bang", "Bambang Bocil")

const testimonial2 = new Testimonial ("https://www.google.com/url?sa=i&url=https%3A%2F%2Fjojowiki.com%2FJotaro_Kujo&psig=AOvVaw2dS8WnYxn80O7GTkx26xuR&ust=1722006533476000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiKmbO8wocDFQAAAAAdAAAAABAJ" 
, "gilee", "Jotaro")

const testimonials = [testimonial1, testimonial2] // length ==> 2

let testimonialHTML = ``

for(let index = 0; index < testimonials.length; index++) {
    testimonialHTML += testimonials[index].html()
}

document.getElementById("testimonials").innerHTML = testimonialHTML