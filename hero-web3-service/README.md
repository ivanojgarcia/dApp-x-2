# Proyecto de Desarrollo Blockchain con NestJS y ethers.js

Este proyecto implementa un Backend for Frontend (BFF) utilizando NestJS como gateway para interactuar con un smart contract desplegado en una blockchain. Utiliza TypeScript y ethers.js para la interacción con la blockchain.

## Estructura del Proyecto

- `src/libs/ethers.provider.ts`: Contiene la librería `EthersLib` para operaciones blockchain.
- `src/services/core.service.ts`: `CoreService` maneja la interacción entre controladores, servicios y el proveedor.
- `src/controllers/`: Contiene los controladores principales `UserController` y `PostsController`.

## Características Principales

### EthersLib

Librería personalizada para operaciones blockchain:
- Leer y escribir en smart contracts
- Crear wallets
- Obtener balances

### CoreService

Servicio central que:
- Obtiene balances
- Proporciona el ABI del smart contract para interacciones

### Controladores

1. **PostsController**
   - Obtiene todos los posts generados
   - Ejemplo de método `findAll()`:

   ```typescript
   async findAll(): Promise<Posts[]> {
     const contractAddress = SMARTCONTRACT_ADDRESS;
     const erc20Abi = this.coreService.getABIContract();
     const contract = this.ethersLib.readSmartContract(
       contractAddress,
       erc20Abi,
     );
     return await contract.getPosts();
   }
   ```

2. **UserController**
   - Maneja operaciones relacionadas con usuarios
   - Crea wallets y firma transacciones

   Ejemplo de creación de wallet:
   ```typescript
   getSignerFromPrivateKey(privateKey: string) {
     const wallet = new ethers.Wallet(privateKey, this.getProvider());
     return wallet;
   }
   ```

   Ejemplo de creación de usuario (escritura en contrato):
   ```typescript
   async createUser(parameter: UserCreateDto): Promise<void> {
     const { username } = parameter;
     const signer = await this.ethersLib.getSigner();
     const contract = this.writeSmartContract(signer);
     const userRegistered = await contract.userRegister(username);
     console.log(userRegistered.hash);
   }

   private writeSmartContract(signer) {
     const contractAddress = SMARTCONTRACT_ADDRESS;
     const erc20Abi = ERC20_ABI;
     return this.ethersLib.writeSmartContract(contractAddress, erc20Abi, signer);
   }
   ```

## Configuración

Asegúrate de configurar las siguientes variables de entorno:
- `SMARTCONTRACT_ADDRESS`: Dirección del smart contract desplegado
- Otras configuraciones necesarias para la conexión con la blockchain

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run start
```

Para modo de desarrollo:
```bash
npm run start:dev
```

## Pruebas

```bash
npm run test
```

## Contribución

Si deseas contribuir a este proyecto, por favor crea un Pull Request con tus cambios propuestos.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)