export class TimeService {
    getTime(delay: number, callback:(x:number)=>void) {
        callback(Date.now());
        setInterval(() => callback(Date.now()), delay);
    }
}