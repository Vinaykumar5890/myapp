import {Chrono} from 'react-chrono'
import './index.css'

function Schedule() {
  return (
    <div className='schedule'>
      <h2 className='scheduleHeading'>Aptitude Guru Series </h2>
      <p className='scheduleparagraph'>Phase 1 : Web Design</p>
      <hr />
      <Chrono
        items={[
          {
            title: '1',
            cardTitle: 'HTML',
            cardSubtitle: `The Html make blue print for website`,
            cardDetailedText: `HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.`,
          },
          {
            title: '2',
            cardTitle: 'CSS',
            cardSubtitle: `The Css make design for website`,
            cardDetailedText: `CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.`,
          },
          {
            title: '3',
            cardTitle: 'Java Script ',
            cardSubtitle: `JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes,`,
          },
          {
            title: '4',
            cardTitle: 'React js  ',
            cardSubtitle: `React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.`,
          },
          {
            title: '5',
            cardTitle: 'Angular js ',
            cardSubtitle: `AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. AngularJS's data binding and dependency injection eliminate much of the code you would otherwise have to write`,
          },
        ]}
        mode='VERTICAL'
      />
    </div>
  )
}

export default Schedule
