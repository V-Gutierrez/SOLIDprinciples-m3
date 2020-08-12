import { IMailProvider, IMessage } from '../IMailProvider';
import nodemailer from 'nodemailer';

export class MailTrapMailProvider implements IMailProvider {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.host,
      port: process.env.port,
      auth: {
        user: process.env.user,
        pass: process.env.pass,
      },
    });
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      body: message.body,
    });
  }
}
