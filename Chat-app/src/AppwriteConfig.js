import { Client, Databases } from 'appwrite';
import config from './Config/config';

export const client = new Client()
export const databases = new Databases(client)

client
  .setEndpoint(config.appWriteUrl)
  .setProject(config.appWriteProjectId)

export default client;