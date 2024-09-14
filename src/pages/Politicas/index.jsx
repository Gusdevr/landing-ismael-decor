import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  line-height: 1.6;
  color: #333;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  color: #444;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  margin-top: 20px;
`;

const Politicas = () => {
  return (
    <Container>
      <Title>Política de Privacidade</Title>

      <Section>
        Sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos, e protegemos as informações pessoais que você nos fornece ao utilizar nosso site e serviços.
      </Section>

      <Section>
        <strong>1. Informações que Coletamos</strong><br />
        Podemos coletar informações pessoais, como nome, endereço, e-mail, número de telefone, e informações de pagamento quando você faz um pedido ou preenche formulários em nosso site. Também podemos coletar informações não pessoais, como dados de navegação e informações sobre o dispositivo utilizado para acessar o site.
      </Section>

      <Section>
        <strong>2. Como Usamos Suas Informações</strong><br />
        Utilizamos suas informações para:
        <ul>
          <li>Processar e entregar pedidos</li>
          <li>Melhorar nossos produtos e serviços</li>
          <li>Personalizar a experiência do usuário</li>
          <li>Entrar em contato para atendimento ao cliente ou para informá-lo sobre atualizações de produtos e serviços</li>
          <li>Cumprir obrigações legais</li>
        </ul>
      </Section>

      <Section>
        <strong>3. Compartilhamento de Informações</strong><br />
        Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros, exceto conforme necessário para processar seu pedido (por exemplo, com empresas de entrega) ou conforme exigido por lei.
      </Section>

      <Section>
        <strong>4. Segurança das Informações</strong><br />
        Adotamos medidas de segurança apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos tecnologias de criptografia e seguimos protocolos de segurança rigorosos para garantir a integridade dos seus dados.
      </Section>

      <Section>
        <strong>5. Cookies e Tecnologias Similares</strong><br />
        Nosso site pode usar cookies e tecnologias semelhantes para melhorar sua experiência de navegação. Você pode optar por desativar os cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do site.
      </Section>

      <Section>
        <strong>6. Seus Direitos</strong><br />
        Você tem o direito de acessar, corrigir ou solicitar a exclusão de suas informações pessoais armazenadas por nós. Para exercer esses direitos, entre em contato conosco através dos dados fornecidos abaixo.
      </Section>

      <Section>
        <strong>7. Alterações nesta Política de Privacidade</strong><br />
        Podemos atualizar esta Política de Privacidade periodicamente. Qualquer alteração será publicada nesta página, e recomendamos que você a revise regularmente para se manter informado sobre como protegemos suas informações.
      </Section>

      <Section>
        <strong>8. Contato</strong><br />
        Se você tiver dúvidas sobre nossa Política de Privacidade ou desejar exercer seus direitos, entre em contato conosco em:
      </Section>

      <ContactInfo>
        E-mail: persiana2irmãos@gmail.com <br />
        Telefone: (31) 973277633 <br />
        Endereço: R. Rio Grande do Norte, 1436 - Savassi
            Belo Horizonte - MG
      </ContactInfo>
    </Container>
  );
}

export default Politicas;
