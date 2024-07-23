export default class Id {
    static get novo() {
        return Math.random().toString(36).substring(2, 15)
    }
}