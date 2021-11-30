import Header from './components/header'

import initialEmails from './data/emails'

import './styles/app.css'

import { useState } from 'react'

function App() {
  const [emails, setEmails] = useState(initialEmails)

  const toggleRead = targetEmail => {
    const updateEmailsList = emails.map(email => {
      if (email.id === targetEmail.id) {
        const updateEmail = {...targetEmail, read: !targetEmail.read}
        return updateEmail
      } else {
        return email
      }
    })
    setEmails(updateEmailsList)
  }

  const toggleStar = targetEmail => {
    const updateEmailsList = emails.map(email => {
      if (email.id === targetEmail.id) {
        const updateEmail = {...targetEmail, starred: !targetEmail.starred}
        return updateEmail
      } else {
        return email
      }
    })
    setEmails(updateEmailsList)
  }

  const starCount = () => {
    let count = 0;
    emails.map(email => email.starred? count++ : count);
    return count;
  }

  const readCount = () => {
    let count = 0;
    emails.map(email => email.read? count++ : count);
    return count;
  }

  return (

    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">{readCount()}</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">{starCount()}</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              onChange={() => toggleRead(emails)}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {emails.map(email => {
          return (
            <li className={`email ${email.read? "read" : "unread"}`}>
              <div className="select">
                <input type="checkbox" checked={email.read} onChange={() => toggleRead(email)} />
              </div>
              <div className="starred">
                <input type="checkbox" checked={email.starred} onChange={() => toggleStar(email)} className="star-checkbox"/>
              </div>
            < div className="sender">
                {email.sender}
              </div>
              <div className="title">
                {email.title}
              </div>
            </li>
          )
          })}
        </ul>
      </main>
    </div>
  )
}

export default App
