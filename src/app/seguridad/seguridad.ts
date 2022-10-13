export interface credencialesUsuario{
    email: string;
    password: string;
}

export interface respuestaAutenticacion {
    token: string;
    expiracion: Date;
}

export interface usuarioDTO{
    id: string;
    email: string;
}

export interface UserDto{
    userId:number;
    firstName:string;
    lastName:string;
    UserName:string;
    Password:string;
    token:string;
}

export interface respuestaUser{
    data: UserDto;
    isSuccess: boolean;
    message: string;
}

/*
public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
        */