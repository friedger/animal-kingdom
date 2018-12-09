import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { UserSession } from 'blockstack'
import { appConfig, OTHER_KINGDOMS } from './constants'
import { loadRuler, loadSubjects } from './utils'

class OtherKingdoms extends Component {

  constructor(props) {
    super(props)
    this.state = {
      kingdoms: []
    }
    this.userSession = new UserSession({ appConfig })
    this.resolveKingdoms = this.resolveKingdoms.bind(this)
  }

  componentWillMount() {
    this.resolveKingdoms()
  }

  resolveKingdoms() {
    const kingdoms = this.state.kingdoms
    OTHER_KINGDOMS.map((kingdom, index) => {
      return loadRuler(this.userSession, kingdom.ruler, kingdom.app)
      .then(ruler => {
        if (!ruler) {
          return;
        }
        kingdoms[index] = {
          ruler: {
            username: kingdom.ruler,
            data: ruler
          },
          subjects: [],
          app: kingdom.app
        }
        this.setState({ kingdoms })
        console.log("set kingdoms");
        return loadSubjects(this.userSession, kingdom.ruler, kingdom.app)
        .then(subjects => {
            kingdoms[index].subjects = subjects
            this.setState({ subjects })
        })
      }).catch(e => {
        console.log("error loading kingdom", e);
      })
    })
  }

  render() {
    const kingdoms = this.state.kingdoms
    return (
      <div className="OtherKingdoms container">
          <h2>Other kingdoms</h2>
          <div className="list-group">
          {kingdoms.length === 0 ?
            <div
              className="list-group-item list-group-item-action flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Loading other kingdoms...</h5>
              </div>
              <p className="mb-1">&nbsp;</p>
            </div>
            :
            <div>
            {kingdoms.map((kingdom, index) => {

              const protocol = kingdom.app.split('//')[0]
              const hostname = kingdom.app.split('//')[1]
              const planet = kingdom.app
              const animal = kingdom.ruler.data.animal
            return (
              <Link key={index}
                className="list-group-item list-group-item-action flex-column align-items-start"
                to={`/kingdom/${protocol}/${hostname}/${kingdom.ruler.username}`}
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{ kingdom.ruler.username } the { animal.name }'s kingdom</h5>
                  <span className="badge badge-primary badge-pill" title="Subjects">{ kingdom.subjects.length }</span>
                </div>
                <p className="mb-1">From planet { planet }</p>
              </Link>
            )
            })}
            </div>
          }
          </div>
      </div>
    );
  }
}

export default OtherKingdoms
