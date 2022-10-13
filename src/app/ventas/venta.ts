export interface ventaCreacionDTO{
    cliente: string;
    producto: string;
    cantidad: number;
    precio: number;
    fecha: Date;
}

export interface VentaDTO {
    salesId: number;
    cliente: string;
    producto: string;
    cantidad: number;
    precio: number;
    fecha: Date;
}

export interface Venta {
    CompanyName: string;
    ContactName: string;    
    ContactTitle: string;
    Address: string;
    City: string;
    Region: string;
    PostalCode: string;
    Phone: string;
    Fax: string;
}
export interface RespuestaVenta{
    data:VentaDTO[],
    isSuccess:boolean,
    message:string
}

export class TableBasicExample {
    displayedColumns: string[];
    dataSource = [];
  }