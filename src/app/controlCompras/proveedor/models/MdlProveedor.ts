export class MdlProveedor
{
public id: number = -1;
public nombre: String = "";
public paterno: String = "";
public materno: String = "";
public rfc: String = "";
public codigo: String = "";
public curp: String = "";
public correo: String = "";
public fecha_creacion: Date = new Date();
public imagen: String = "";

public id_proveedor_estatus: number = 1;
public id_proveedor_tipo: number = 1;
public id_proveedor_clasificacion: number = 1;
public id_rh_empleado: number = -1;
public id_proveedor_operacion: number = 1;

public id_sat_usocfdi: number = -1;
public id_sat_doc_cobro: number = 1;
public id_sat_regimenfiscal: number = -1;

}