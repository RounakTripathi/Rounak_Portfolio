import aws from '../app/assets/svg/skills/aws.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import c from '../app/assets/svg/skills/c.svg';
import canva from '../app/assets/svg/skills/canva.svg';
import cplusplus from '../app/assets/svg/skills/cplusplus-original.svg';
import css from '../app/assets/svg/skills/css.svg';
import figma from '../app/assets/svg/skills/figma.svg';
import git from '../app/assets/svg/skills/git.svg';
import html from '../app/assets/svg/skills/html.svg';
import java from '../app/assets/svg/skills/java-original.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import microsoftoffice from '../app/assets/svg/skills/microsoftoffice.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import python from '../app/assets/svg/skills/python-original.svg';
import react from '../app/assets/svg/skills/react.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import unity from '../app/assets/svg/skills/unity.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'aws':
      return aws;
    case 'bootstrap':
      return bootstrap;
    case 'c':
      return c;
    case 'canva':
      return canva;
    case 'c++':
      return cplusplus;
    case 'css':
      return css;
    case 'figma':
      return figma;
    case 'git':
      return git;
    case 'html':
      return html;
    case 'java':
      return java;
    case 'javascript':
      return javascript;
    case 'microsoft office':
      return microsoftoffice;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'next js':
      return nextJS;
    case 'python':
      return python;
    case 'react':
      return react;
    case 'tailwind':
      return tailwind;
    case 'unity':
      return unity;
    default:
      return null;
  }
};

