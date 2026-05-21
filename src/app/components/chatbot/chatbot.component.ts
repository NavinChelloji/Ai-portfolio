import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService, ChatMessage } from '../../services/chat.service';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent {
  isOpen = false;
  isLoading = false;
  userInput = '';
  showSuggestions = true;

  messages: { role: 'user' | 'bot'; text: string }[] = [
    {
      role: 'bot',
      text: "Hi! 👋 I'm an AI assistant with full knowledge of Naveen's resume. Ask me anything about his skills, experience, projects, education, or how to contact him!",
    },
  ];

  history: ChatMessage[] = [];

  suggestions = [
    'What are his skills?',
    'Tell me about his experience',
    'What projects has he built?',
    'Education background?',
    'How to contact him?',
  ];

  constructor(private chatService: ChatService) {}

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendSuggestion(text: string) {
    this.userInput = text;
    this.showSuggestions = false;
    this.send();
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }

  send() {
    const text = this.userInput.trim();
    if (!text || this.isLoading) return;

    this.userInput = '';
    this.showSuggestions = false;
    this.messages.push({ role: 'user', text });
    this.history.push({ role: 'user', content: text });
    this.isLoading = true;

    this.scrollToBottom();

    this.chatService.sendMessage(this.history).subscribe({
      next: (res) => {
        this.messages.push({ role: 'bot', text: res.reply });
        this.history.push({ role: 'assistant', content: res.reply });
        this.isLoading = false;
        this.scrollToBottom();
      },
      error: () => {
        this.messages.push({
          role: 'bot',
          text: '⚠️ Could not reach the server. Please make sure the Node.js server is running on port 3000.',
        });
        this.isLoading = false;
        this.scrollToBottom();
      },
    });
  }

  private scrollToBottom() {
    setTimeout(() => {
      const el = document.getElementById('chat-messages');
      if (el) el.scrollTop = el.scrollHeight;
    }, 50);
  }
}
