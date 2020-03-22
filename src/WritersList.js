import  React, { Component } from 'react'
import  WritersService from './WritersService'
import PropTypes from 'prop-types'

const  MywritersService  =  new  WritersService()

class  WritersList  extends  Component {

    constructor(props) {
        super(props);
        this.state  = {
            writers: [],
            nextPageURL:  '',
          }
        this.nextPage  =  this.nextPage.bind(this)
    }

    componentDidMount() {
        var  self  =  this
        MywritersService.getwriters().then(function (result) {
            self.setState({ writers:  result, nextPageURL:  result.nextlink})
            console.log(result)
        });
    }
    nextPage(){
        var  self  =  this
        console.log(this.state.nextPageURL);
        MywritersService.getwritersByURL(this.state.nextPageURL).then((result) => {
            self.setState({ writers:  result, nextPageURL:  result.nextlink})
        })
    }
    render() {

        return (
            <div  className="writers--list" data-test="writers-table">
                {this.state.writers.length === 0 &&
                  <p data-test="no-writers-message">Give me some writer!</p>
                }
                <table className="table">
                    <thead key="thead">
                    <tr>
                        <th>#</th>
                        <th>Pseudonym</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.writers.map( c  =>
                        <tr data-test="writer-row" key={c.id} >
                            <td>{c.id} </td>
                            <td>{c.pseudonym}</td>
                            <td>{c.first_name}</td>
                            <td>{c.last_name}</td>
                            <td>{c.email}</td>
                        </tr>)}
                    </tbody>
                </table>

                {this.state.nextPageURL &&
                  <button className="btn btn-primary" onClick=  { this.nextPage  } data-test="button-next">Next</button>
                }
            </div>
        )
    }
}

WritersList.propTypes = {
  writers: PropTypes.arrayOf(
    PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      email: PropTypes.string.isRequired,
      pseudonym: PropTypes.string.isRequired,
      birth_date: PropTypes.instanceOf(Date).isRequired,
    }).isRequired
  ),
}

export  default  WritersList
