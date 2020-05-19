import { Skill } from './skill.model';

export interface Project{
    title: string,
    description: string,
    imageUrl: string,
    language: Skill, 
    url?: string,
    gitUrl: string
}