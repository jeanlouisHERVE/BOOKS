import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addBook } from '../redux/actions/actionAddbook';

const AddBooks = ({libraryData, addBook}) => {

    console.log(libraryData)

    const initialState = {
        title: "",
        author: "",
    }

    const [newData, setNewData] = useState(initialState)
    

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(newData)
        //vider l'input
        setNewData(initialState)
    }

  return (
    <main role="main">
        <div className='jumbotron jumbotron-fluid bg-success p-3 d-flex align-items-center' style={{minHeight:'300px'}}>
            <div className='container text-center'>
                <h1 className='display-4'>BOOKS</h1>
                <p>ajoutez un livre à votre bibliothèque</p>
                <form className='form-inline d-flex justify-content-center' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input 
                            value={newData.title}
                            type="text" 
                            className='form-control' 
                            placeholder='titre' 
                            required
                            onChange={(e) => setNewData({...newData, title: e.target.value})}
                        />
                    </div>
                    <div className='form-group ms-3'>
                        <input 
                            value={newData.author}
                            type="text" 
                            className='form-control' 
                            placeholder='auteur' 
                            required
                            onChange={(e) => setNewData({...newData, author: e.target.value})}
                        />
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

const mapStateToProps = (state) => {
    return {
        libraryData: state.library
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        addBook: param => dispatch(addBook(param))
    }
} 


export default connect(mapStateToProps, mapDispatchToProps)(AddBooks)