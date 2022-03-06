import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchBooks} from '../redux/actions/actionFetchbook';

function SearchBook() {

    const [title, setTitle] = useState('');

    const state = useSelector(state => state.search);
    const dispatch = useDispatch();

    console.log(state)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchBooks(title))
    };

  return (
    <main role="main">
        <div className='jumbotron jumbotron-fluid bg-success p-3 d-flex align-items-center' style={{minHeight:'300px'}}>
            <div className='container text-center'>
                <h1 className='display-4'>BOOKS</h1>
                <p>indiquez le sujet du livre à rechercher sur GoogleAPi</p>
                <form 
                    className='form-inline d-flex justify-content-center'
                    onSubmit={handleSubmit}
                >
                    <div className='form-group'>
                        <input 
                            onChange={e => setTitle(e.target.value)}
                            type="text" 
                            className='form-control' 
                            placeholder='Quoi rechercher ?' 
                            required
                            value={title}
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

export default SearchBook