
import './contact.css';
function Contact() {
                    
  return (
    

    <div>
     <h2 className="nous-contacter" href="">NOUS CONTACTER</h2>
    <div className="container">
        <section>
            <article className="call-img">
                <img className="call" src="images/phone.jpg" alt="telephone_img" width="30px" height="30px"/>
                <h4>telephone</h4>
                <p>Notre équipe du service client <br></br> est disponible pour toute assistance dont vous pourriez avoir besoin.
                </p>
                <a href="#" className="contact-us" id="contact1">Contacter nous</a>
            </article>
        </section>

        <section>
            <article className="call-img">
                <img className="call" src="images/inbox.jpg" alt="telephone_img" width="35px" height="35px"/>
                <h4>email</h4>
                <p>Contactez-nous en remplissant notre simple formulaire de contact</p>
                <a href="#" className="contact-us" id="contact2">Contacter nous</a>
            </article>
        </section>

        <section>
            <article className="call-img">
                <img className="call" src="images/calendar.jpg" alt="telephone_img" width="30px" height="30px"/>
                <h4>rendez-vous</h4>
                <p>Réservez un rendez-vous d'achat virtuel ou en magasin avec l'un de nos conseillers compétents.</p>
                <a href="#" className="contact-us" id="contact3">Reserve maintenant</a>
            </article>
        </section>
    </div>
    


   
</div>
    );
   
}



export default Contact;