export interface NavLink {
    name : string,
    url : string,
    authorization : number, // mini => user -> 0 => teacher -> 1 => admin -> 2 
    icon?: string
}