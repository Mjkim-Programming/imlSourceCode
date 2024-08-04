import logo from './IMLlogo-001.png';
import './App.css';
import bannerimage from './IML-Banner.png';
import { BrowserRouter, Routes, Route, Link, Router, HashRouter} from 'react-router-dom';
import timeline from './IML_Timeline.png';
import { createRef, useEffect, KeyboardEvent, useState, useRef} from 'react';
import React from 'react';
import Iframe from 'react-iframe';
/* import * as pixi from 'pixi.js';

const app = new pixi.Application();
await app.init({
  backgroundColor: 0x000000,
  width: window.innerWidth,
  height: window.innerHeight,
});
await pixi.Assets.load('IMLlogo-001.png');
let texture = pixi.Texture(process.env.PUBLIC_URL + '/IMLlogo-001.png');
let image = new pixi.Sprite(texture);
app.stage.addChild(image);

function GraphicTest() {
  document.body.appendChild(app.canvas);
} */

/**
 * Function Header
 * 
 *  @return header object
 */
function Header(){
  return(
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/" className="header-button">Home</Link>
      <Link to="/learn" className="header-button">Learn</Link>
      <Link to="/about" className="header-button">About</Link>
    </header>
  );
}

/**
 * Function Banner
 * 
 * @returns banner object
 */
function Banner(){
  return(
    <div className="Banner">
      <img src={bannerimage} className="BannerImage" alt="배너 이미지입니다"></img>
    </div>
  );
}

/**
 * Function Wheretofind
 * 
 * @returns aboutPage object
 */
function Wheretofind(){
  return(
    <div className="article2">
      <br></br>
      <h1>IML 프로젝트는 어디에서 볼 수 있나요?</h1>
      <p>현재 Mjkim-programming.github.io에서 확인할 수 있습니다.</p>
      <br></br>
    </div>
  );
}

/**
 * Function Footer
 * 
 * @returns Footer object
 */
function Footer(){
  return(
    <div className="customfooter">
      <p className="footertext">
        <span className="footertextname">IML Project</span>
        <br></br>
        <span className="footertextowner">Owner:Kmj | Contact: Mjkim-programming@gmail.com</span>
        <br></br>
      </p>
    </div>
  );
}

/**
 * Function Home
 * 
 * @returns homePage object
 */
function Home(){
  return(
    <div className="App">
      <Header></Header>
      <div className="Main">
        <Banner></Banner>
        <Wheretofind></Wheretofind>
        <Footer></Footer>
      </div>
    </div>
  );
}

/**
 * Function Learn
 * 
 * @returns learnPage object
 * @todo Need More Development
 */


// TODO: Complete Development
// TODO: Make UI for this
// TODO: Align Items Horizontally
// TODO: Complete Design
// ? Already made function to change Image

function LearnDemorgan(){
  let [proKey,changeProKey] = useState(0);
  let [isKeyRight,keyChange] = useState(0);
  let proKeyHidden = 7;
  const ProKeyInput = event => {
    changeProKey(event.target.value);
  }
  useEffect(() => {
    console.log(proKey);

    if(proKey == proKeyHidden){
      keyChange(1);
      console.log(isKeyRight);
    } else{
      keyChange(0);
      console.log(isKeyRight);
    }

  }, [proKey]);
  return(

    <div className="App">
      <div className="LearnApp">
        <Header></Header>
        <div  className="asdf">
          <div className="LearnImages">
           <iframe loading="lazy"
                   className="iframeTest"
                   title="asdf"
                   src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGMPUb35Ow&#x2F;3BzNvVU5Vp57PCzXqCrufA&#x2F;view?embed"
                   allowfullscreen="allowfullscreen"
                   allow="fullscreen">
            </iframe>
            <input type="number" placeholder="문제 키를 입력하세요" value={proKey} onChange = {ProKeyInput}/>
            {isKeyRight ? <h1><ProbFrame /></h1> : <h1 className="lastText">문제 키가 잘못되었습니다.</h1>}
          </div>
          {/*
          <div style="position: relative; width: 100%; height: 0; padding-top: 100.0000%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGMPUb35Ow&#x2F;3BzNvVU5Vp57PCzXqCrufA&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>          */}
        </div>
      </div>
    </div>
  );
}

function ProbFrame(){
  let [proAns, changeProAns] = useState(0);
  let [proAnsCor, changeProSta] = useState(0);
  let proAnsHidden = 5;
  const ProAnsInput = event  => {
    changeProAns(event.target.value);
  }
  useEffect(() => {
    console.log(proAns);
    if(proAns == proAnsHidden){
      changeProSta(1);
    } else {
      changeProSta(0);
    }
  },[proAns]);
  return(
    <div className="App">
        <iframe loading="lazy" className="iframeTest"
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGM23Rjnpc&#x2F;NVISFpvFhxPWzxg1c0IOVA&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
        </iframe>
        <input type="number" placeholder="문제의 답을 입력하세요" value={proAns} onChange = {ProAnsInput} />
        {proAnsCor ? <Link to="/learn" className="lastText">정답입니다! 메인 화면으로 돌아가려면 클릭하세요.</Link> : <h1 className="lastText">답이 잘못되었습니다.</h1>}
    </div>
  );
}

function Pitagoras(){
  return(
    <div className="App">
      <h1>개발중인 페이지입니다.</h1>
    </div>
  )
}

function LearnStart(){
  return(
    <div className="App">
      <Header></Header>
      <div className="LearnPage">
        <h1 className = "LearnText">학습하기</h1>
        <LearnBar LearnName={"드모르간의 법칙"} LinkTo="/demorgan"></LearnBar>
        <div className="DivisionLine"/>
        <LearnBar LearnName={"피타고라스 정리"} LinkTo="/pitagoras"></LearnBar>
      </div>
    </div>
  );
}

const LearnBar = (props) => {
  return(
    <div className="App">
      <div className="LearnBar">
        <h1 className="LearnBarText">{props.LearnName}</h1>
        <div className="LearnButtonDiv">
          <Link to={props.LinkTo} className="LearnButton">학습하기</Link>
        </div>
      </div>
    </div>
  )
}

/**
 * Function About
 * 
 * @returns aboutPage object
 */
function About(){
  return(
    <div className="App">
      <Header></Header>
      <img src={timeline} className="AboutImage" alt="IML 프로젝트의 타임라인"></img>
      <Footer></Footer>
    </div>
  );
}

/**
 * Function App
 * 
 * @returns App object
 */
function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path="/" exact = {true} element={<Home/>} />
              <Route path="/learn" exact = {true} element={<LearnStart/>} />
              <Route path="/about" exact = {true} element={<About/>}/>
              <Route path="/demorgan" exact={true} element={<LearnDemorgan/>}/>
              <Route path="/pitagoras" exact={true} element={<Pitagoras/>}/>
            </Routes>        
    </HashRouter>
  );
}

export default App;