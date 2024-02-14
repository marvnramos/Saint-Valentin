import './App.css';

function App() {
  const mytext = '¡Muah! <3, besos en el chukinuni.';
  let count = 0;
  const getTotalHover = ()=> {
    return count+=1;
  };
  return (
    
      <div className="absolute inset-0 -z-10 h-full w-full bg-white" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #e5e7eb 1px, transparent 1px)', backgroundSize: '16px 16px', width: '100vw', height: '100vw', position: 'relative'  }}>
        <div className='container'>
          <img id='osito' src="https://i.pinimg.com/originals/7d/b2/ec/7db2ec038efac4a20325f2144ca4ff03.gif" alt="" />
          <h1 id='text' className='protest-riot-regular'>Keres cer mi chukinuni?</h1>
          <p id='textito' className="protest-riot-regular">Ni modo, te gua vlokear la targeta otra ves ùnú</p>
          <div className="flex items-center">
          <button id="simon" type="button" className="btn btn-success"
          onClick={() => {
            const img = document.getElementById('osito');
            const text = document.getElementById('text');
            const simonbtn = document.getElementById('simon');
            const guakalabtn = document.getElementById('guakala');
            const textito = document.getElementById('textito');

            textito.textContent = "Sonreí más seguido, pofavo, te ves más bonito cuando lo haces. uwu";
            textito.style.visibility = 'visible';

            simonbtn.style.display = 'none';
            guakalabtn.style.display = 'none';

            img.src = 'https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif';
            text.textContent = mytext; 
          }}
          >Simon</button>
          
          <button id='guakala'  type="button" className="btn btn-danger"
          onClick={() => {
            const img = document.getElementById('osito');
            const text = document.getElementById('text');
            const simonbtn = document.getElementById('simon');
            const guakalabtn = document.getElementById('guakala');
            const textito = document.getElementById('textito');

            textito.textContent = "Sonreí más seguido, pofavo, te ves más bonito cuando lo haces. uwu";
            textito.style.visibility = 'visible';

            simonbtn.style.display = 'none';
            guakalabtn.style.display = 'none';

            img.src = 'https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif';
            text.textContent = mytext; 
          }}
          onMouseOver={() => { 
            const button = document.getElementById('guakala');
            const img = document.getElementById('osito');
            const text = document.getElementById('text');
            const textito = document.getElementById('textito');

            button.className = 'btn btn-success';
            button.textContent = 'Simon';

            const result = getTotalHover();
            if(result > 1){
              img.src = 'https://media.tenor.com/fvphRD_LUEMAAAAj/bear-angry.gif';
              text.textContent = '¡¿De verdad le vas a dar que no?! oO';
              textito.style.visibility = 'visible';
            }
           }}
          onMouseOut={() => {
            const button = document.getElementById('guakala');
            button.className = 'btn btn-danger';
            button.textContent = 'Guakala';
          }}
          >Guakala</button>
          </div>
        </div>
      </div>
  );
}

export default App;
