import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../components/section-title/section-title.component";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [NgFor, SectionTitleComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {
  paragraphs: string[] = [
    "My name is Jorge, an electronic engineer from Venezuela, currently residing in Bogotá, Colombia. I am a cat lover with a strong passion for understanding and learning about everything in this world.",
    "My journey as a web developer began with the help of online resources like W3Schools, Wikipedia, and YouTube. I asked myself what I truly wanted to do and realized that creating and hosting my own video games was my calling. Inspired by classic games like Warcraft 3, Starcraft, and Age of Empires, I set out to turn my passion into a reality.",
    "Some may consider it unnecessary to learn skills you can pay others to do, but I am not satisfied unless I understand every aspect of my work. I like having control, and this motivation drives me to keep learning and mastering new skills.",
    "Today, as an experienced video game developer, I have honed my ability to create immersive and engaging experiences. With a background in both web and mobile development, I bring a unique perspective to game development, ensuring high-quality applications that prioritize user experience. My meticulous attention to detail and adherence to best practices drive the excellence of my projects.",
    "My passion for continuous learning enables me to swiftly adapt to new challenges and contribute innovative ideas and solutions. Whether working independently or as part of a team, I thrive in dynamic environments where creativity and problem-solving are key. My diverse experience has equipped me with the ability to tackle complex problems and deliver polished, user-friendly applications."
  ];  
}
