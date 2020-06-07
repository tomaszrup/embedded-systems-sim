import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  queue: string[] = []
  current: string = null
  history: string[] = []
  buffer: string = ''
  bufferInterval = null

  constructor() { }

  getQueuedInput() : string {
    if(!this.queue.length && !this.current) return null

    if(!this.current) {
      this.current = this.queue.shift()
    }

    let char = this.current.charAt(0)
    this.current = this.current.substr(1)
    return char
  }

  enqueue(value: string) {
    this.queue.push(value)
  }

  pushToHistory(msg) {
    
    if(typeof msg === "boolean") {
      msg = msg ? "1" : "0"
    } 
    
    this.buffer += msg
    if(this.bufferInterval) {
      clearTimeout(this.bufferInterval)
    }
    this.bufferInterval = setTimeout(this.pushBuffer.bind(this), 60)
  }

  pushBuffer() {
    this.history.push(this.buffer)
    this.buffer = ''
  }
}
