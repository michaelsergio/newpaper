import React, { Component } from 'react';
import logo from './logo.svg';
import SampleNewsData from './SampleNewsData2';
import './App.css';


function Section(props) {
      // <span className={bylinestyle}>{byline}</span>
      // <span className="article dropcap" dangerouslySetInnerHTML={{__html: article}} />
	const sectionStyle = "section--title headline " + props.sectionstyle;
  return (<div class="section">
      <span className={sectionStyle}>{props.title}</span>
  </div>);
}

function Story(props) {
  const headline = props.headline;
  const headlinestyle = "headline " + props.headlinestyle;
  const byline = props.byline;
  const bylinestyle = "headline " + props.bylinestyle;
  const article = props.article;
  return (<div class="story">
    <div className="head">
      {headline && <span className={headlinestyle}>{headline}</span>}
      {byline && <span className={bylinestyle}>{byline}</span>}
      <span className="article dropcap" dangerouslySetInnerHTML={{__html: article}} />
    </div>
  </div>);
}

function WeatherForecast() {
  return (<div className="weatherforcastbox">
    <span style={{fontStyle: "italic"}}>
      Weatherforcast for the next 24 hours: Plenty of Sunshine
    </span>
    <br />
    <span>Wind: 7km/h SSE; Ther: 21°C; Hum: 82%</span>
  </div>);
}

function Column(props) {
  return <div className="collumn">{props.children}</div>
}

class App extends Component {
  render() {
    const title = "Newpost York";
    const subhead = "York, MA - Thursday August 30, 1978 - Seven Pages"
    const issue = "No. 32,338";
    const price = "Price 3d";
    return (<div>
      <div className="head">
        <div className="headerobjectswrapper">
          <WeatherForecast />
          <header>{title}</header>
        </div>
        <div className="subhead double">
					<span className="issue">{issue}</span>
					<span>{subhead}</span>
					<span className="price">{price}</span>
        </div>
      </div>
      <div className="content">
        <div className="collumns">
          <Column>
            {/* <Section title="Births" /> */}
            {[...Array(8).keys()].map(i=>i+1).map(i =>
              <Story key={i}
                headline={`Headline Number ${i}`}
                headlinestyle={`hl${i}`}
                article="Lorem Ipsum"
              />
            )}
          </Column>
					<Column>
					<Section title="Births" sectionstyle="hl8" />
					</Column>
          {SampleNewsData.stories.map(s =>
            <Column><Story key={s.headline} {...s} /></Column>
          )}
        </div>
      </div>
    </div>);
  }
}


export default App;
