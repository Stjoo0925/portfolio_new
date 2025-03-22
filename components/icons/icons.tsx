'use client'

import { 
  FaDesktop, FaServer, FaNetworkWired, FaUsers, 
  FaVuejs, FaReact, FaJs, FaJava, FaPython, 
  FaAws, FaDocker, FaGithub, FaFigma 
} from 'react-icons/fa';
import { SiTypescript, SiSpring, SiPytorch, SiMysql, SiGithubactions } from 'react-icons/si';

const FrontendIcon = () => <FaDesktop className="w-7 h-7" />
const BackendIcon = () => <FaServer className="w-7 h-7" />
const DevOpsIcon = () => <FaNetworkWired className="w-7 h-7" />
const CollaborationIcon = () => <FaUsers className="w-7 h-7" />

const VueIcon = () => <FaVuejs className="w-7 h-7" />
const ReactIcon = () => <FaReact className="w-7 h-7" />
const JavaScriptIcon = () => <FaJs className="w-7 h-7" />
const TypeScriptIcon = () => <SiTypescript className="w-7 h-7" />
const JavaIcon = () => <FaJava className="w-7 h-7" />
const SpringIcon = () => <SiSpring className="w-7 h-7" />
const PythonIcon = () => <FaPython className="w-7 h-7" />
const PyTorchIcon = () => <SiPytorch className="w-7 h-7" />
const MySQLIcon = () => <SiMysql className="w-7 h-7" />
const AWSIcon = () => <FaAws className="w-7 h-7" />
const DockerIcon = () => <FaDocker className="w-7 h-7" />
const GitHubActionsIcon = () => <SiGithubactions className="w-7 h-7" />
const FigmaIcon = () => <FaFigma className="w-7 h-7" />
const GitHubIcon = () => <FaGithub className="w-7 h-7" />

export { 
  FrontendIcon, BackendIcon, DevOpsIcon, CollaborationIcon, 
  VueIcon, ReactIcon, JavaScriptIcon, TypeScriptIcon,
  JavaIcon, SpringIcon, PythonIcon, PyTorchIcon, 
  MySQLIcon, AWSIcon, DockerIcon, GitHubActionsIcon, 
  FigmaIcon, GitHubIcon
}