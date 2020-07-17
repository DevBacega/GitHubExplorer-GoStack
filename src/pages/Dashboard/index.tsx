import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/54642509?s=460&u=f3d271b3747eac6035027ed70229ab26d04089f0&v=4"
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
