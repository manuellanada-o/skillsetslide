import React, { useState } from 'react';
import '../App.css';
import { DiReact, DiJsBadge, DiHtml5, DiCss3, DiNodejsSmall, DiAndroid, DiApple, DiMongodb, DiMysql, DiPostgresql, DiGithubBadge } from 'react-icons/di';
import { SiCodewars, SiGimp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

import SkillLabel from './SkillLabel'

export default function SkillSet() {
  const [backgroundColorChange, setBackgroundColorChange] = useState(1);
  const [backgroundColorNumber, setBackgroundColorNumber] = useState(0);
  const [backgroundColorString, setBackgroundColorString] = useState('00');
  const [colorNumber, setColorNumber] = useState(255);
  const [colorString, setColorString] = useState('ff');
  const [itemIndex, setItemIndex] = useState(0);

  const webDev = <div>
    <span>
      <SkillLabel icon={<DiJsBadge/>} label={'javascript'}/>
      <SkillLabel icon={<DiNodejsSmall/>} label={'node'}/>
      <SkillLabel icon={<DiReact className='icon-spin'/>} label={'react'}/>
    </span>
    <p>web dev</p>
  </div>

  const mobile = <div>
    <span>
      <SkillLabel icon={<DiAndroid/>} label={'android'}/>
      <SkillLabel icon={<DiApple/>} label={'ios'}/>
      <SkillLabel icon={<DiReact className='icon-spin'/>} label={'react native'}/>
    </span>
    <p>mobile</p>
  </div>

  const design = <div>
    <span>
      <SkillLabel icon={<SiGimp/>} label={'gimp'}/>
      <SkillLabel icon={<DiHtml5/>} label={'html5'}/>
      <SkillLabel icon={<DiCss3/>} label={'css3'}/>
    </span>
    <p>design</p>
  </div>

  const database = <div>
    <span>
      <SkillLabel icon={<DiMongodb/>} label={'mongodb'}/>
      <SkillLabel icon={<DiMysql/>} label={'mysql'}/>
      <SkillLabel icon={<DiPostgresql/>} label={'postgresql'}/>
    </span>
    <p>database</p>
  </div>

  const about = <div>
    <span>
      <SkillLabel icon={<DiGithubBadge/>} label={<a href='https://github.com/manuellanada-o' style={{color: 'inherit'}} target='_blank' rel='noopener noreferrer'>github</a>}/>
      <SkillLabel icon={<FaLinkedin/>} label={<a href='https://www.linkedin.com/in/manuellanada' style={{color: 'inherit'}} target='_blank' rel='noopener noreferrer'>linkedin</a>}/>
      <SkillLabel icon={<SiCodewars/>} label={<a href='https://www.codewars.com/users/manuellanada' style={{color: 'inherit'}} target='_blank' rel='noopener noreferrer'>codewars</a>}/>
    </span>
    <p>about</p>
  </div>

  const itemList = [webDev, database, design, mobile, about]

  setTimeout(() => {
    setBackgroundColorChange(backgroundColorNumber >= 255 ? -Math.abs(backgroundColorChange) : backgroundColorNumber <= 0 ? Math.abs(backgroundColorChange) : backgroundColorChange)
    setBackgroundColorNumber(backgroundColorNumber + backgroundColorChange > 255 ? 255 : backgroundColorNumber + backgroundColorChange < 0 ? 0 : backgroundColorNumber + backgroundColorChange)
    setBackgroundColorString(`${backgroundColorNumber.toString(16).length === 1 ? '0' : ''}${backgroundColorNumber.toString(16)}`)
    setColorNumber(255 - backgroundColorNumber)
    setColorString(`${colorNumber.toString(16).length === 1 ? '0' : ''}${colorNumber.toString(16)}`)
    
    if (backgroundColorNumber === colorNumber)
      setItemIndex(itemIndex + 1 === itemList.length ? 0 : itemIndex + 1)

  }, 100);

  return (
    <div className="App-header" style={{backgroundColor:`#${backgroundColorString.repeat(3)}`, color:`#${colorString.repeat(3)}`}}>
      {itemList[itemIndex]}
      <div style={{ position:'absolute', top:20, fontFamily:'Helvetica, sans-serif', fontSize:12 }}>e: manuellanada@outlook.com</div>
    </div>
  );
}