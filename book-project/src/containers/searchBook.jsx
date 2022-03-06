import React from 'react'

function searchBook() {
  return (
    <main role="main">
        <div className='jumbotron jumbotron-fluid bg-success p-3 d-flex align-items-center' style={{minHeight:'300px'}}>
            <div className='container text-center'>
                <h1 className='display-4'>BOOKS</h1>
                <p>indiquez le sujet du livre à rechercher sur GoogleAPi</p>
                <form className='form-inline d-flex justify-content-center'>
                    <div className='form-group'>
                        <input 
                           
                            type="text" 
                            className='form-control' 
                            placeholder='Quoi rechercher' 
                            required
                           
                        />
                    </div>
                    <div className='form-group ms-3'>
                        <input 
                          
                            type="text" 
                            className='form-control' 
                            placeholder='auteur' 
                            required
                          
                        />
                    </div>
                    <div className='form-group ms-3'>
                    <button className='btn btn-outline-warning '>Rechercher </button>
                    </div>
                </form>
            </div>
        </div>
        <div className='container p-3' style={{minHeight: "200px"}}>
            <div className='accordion'> 
                <div className='card mb-2'>
                    <div className='card-header'>
                    </div>
                    <div className='collapse' data-parent='accordion'>
                        <div className='card-body'>
                        {
                        /* {
                            image 
                            titre
                            auteur
                            description
                            btn plus d'infos  
                            btn enregistrer
                            */
                        }
                        
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </main>
  )
}

export default searchBook