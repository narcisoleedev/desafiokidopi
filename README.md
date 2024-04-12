### Desafio Kidopi

Projeto feito para processo seletivo da Kidopi, sendo utilizado como ferramentas:

- Vanilla JS (front-end)
- PHP (back-end)
- MariaDB/MySQL (banco de dados)
- Apache Server (servidor)

### Pré requisitos:

Primeiramente, você deve ter instalado o PHP, MariaDB e Apache Server previamente para conseguir utilizar o back-end.

Dependendo do seu Sistema Operacional, o passo a passo pode variar.

Utilizei como base o Arch Linux, seguindo esses tutoriais de instalação: 
- [Mysql, PHP e Apache no Arch Linux](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-arch-linux)
- [Apache HTTP Server](https://wiki.archlinux.org/title/Apache_HTTP_Server#PHP)

Após ter instalado, dentro do MariaDB crie um usuário **test** (com privilégios de escrita) com senha **password123** para utilizar de acordo com as configurações que estão no **api/connection.php**.

Lembre-se também de habilitar o módulo mysqli para que a conexão com o banco funcione.

Agora, logando dentro do banco:

Pela linha de comando:

```sudo mysql -u test -p```

Após isso, cole a query dentro do arquivo **query/initDatabase.sql** dentro da linha de comando do Mysql para criar o banco e as tabelas.

Após isso, está tudo pronto para rodarmos a aplicação!

### Rodando:

Clone o repositório na sua máquina.

Dentro da pasta do projeto, entre na pasta **api**, abra o cmd/bash e rode o seguinte comando para inicializar o back-end:

```php -S localhost:8000```

Isso irá habilitar o back-end no endereço acima, deixe rodando enquanto utiliza a interface.

Para abrir a interface basta abrir o arquivo index.html no seu navegador e utilizar a vontade :).