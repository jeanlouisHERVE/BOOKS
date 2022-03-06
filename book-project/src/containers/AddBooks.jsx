import React from 'react'

const AddBooks = () => {
  return (
    <main role="main">
        <div className='jumbotron jumbotron-fluid bg-success p-3'>
            <div className='container text-center'>
                <h1 className='display-4'>BOOKS</h1>
                <p>ajoutez un livre à votre bibliothèque</p>
                <form className='form-inline d-flex justify-content-center'>
                    <div className='form-group'>
                        <input type="text" className='form-control' placeholder='titre' required/>
                    </div>
                    <div className='form-group ms-3'>
                        <input type="text" className='form-control' placeholder='auteur' required/>
                    </div>
                    <div className='form-group ms-3'>
                    <button className='btn btn-outline-warning '>Ajouter un livre </button>
                    </div>
                </form>
            </div>
        </div>
        <div className='container p-3' style={{minHeight: "200px"}}>
            <div className='row'>
                <div className='col-md-12'>
                    <ul className='list-group'>
                        <li className='list-group-item list-group-light d-flex justify-content-between'>
                            livres enregistrés ici
                        </li>
                        <div className='d-flex justify-content-center'>
                            <button className='btn btn-danger mt-4 mb-5'>Effacer tous les livres</button>
                        </div>
                    </ul>
                </div>
               
            </div>
        </div>
    </main>
  )
}

export default AddBooks