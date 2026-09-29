import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const whatsapp = process.env.REACT_APP_WHATSAPP;
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-8 col-md-4 col-lg-3">
              <div className="sectionDiv">
                <i className="bi bi-whatsapp"></i><span className="spanText">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                  href={`https://wa.me/${whatsapp}`}
                >WhatsApp</a></span>
              </div>
              <div className="sectionDiv">
                <i className="bi bi-person-walking"></i><span className='spanText'><a target="_blank" rel="noopener noreferrer" className="link" href="https://otaviosilvadev.github.io/marketplace-runners/">Produtos de corrida</a></span>
              </div>
              <div className="sectionDiv">
                <i className="bi bi-facebook"></i><span className='spanText'><a target="_blank" rel="noopener noreferrer" className="link" href="https://www.facebook.com/aquarelapresentesepapelaria/?locale=pt_BR">Facebook</a></span>
              </div>
              <div className="sectionDiv">
                <i className="bi bi-geo-alt"></i><span className='spanText'><a target="_blank" rel="noopener noreferrer" className="link" href="https://www.google.com/maps/place/Aquarela+Presentes+e+Papelaria/data=!4m2!3m1!1s0x0:0x65a77bd686cb2ab7?sa=X&ved=1t:2428&ictx=111">Localização</a></span>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col">
                <span className="textFooter">© Copyright 2026 Otavio Silva</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
