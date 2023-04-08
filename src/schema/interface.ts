import { PromptTemplate, PromptTemplateInput } from 'langchain/prompts';
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
} from 'langchain/prompts';

export class FlipsideSchema {
  private ChainName: string;
  private SchemaName: string;
  private TableName: string;
  private TableSchema: string;

  constructor(
    ChainName: string,
    SchemaName: string,
    TableName: string,
    TableSchema: string
  ) {
    this.ChainName = ChainName;
    this.SchemaName = SchemaName;
    this.TableName = TableName;
    this.TableSchema = TableSchema;
  }

  // TODO: Remove the strongly combined prompt logic from the schema
  toChatPromptTemplate(): ChatPromptTemplate {
    let message =
      'I want to you to act like the expert who are good at writing SQL query.\n';
    message += `Given the table below, please write the write the SQL query that can get the info about {userMessage}\n`;
    message +=
      'GIVE A SQL QUERY ONLY **without** any further responses/explanations.\n';
    message +=
      'If you are not 100% certain to get the valid information from the database table below, respond "NO" without further responses/explanations.\n';
    message +=
      'To query the database, you need to use the database information below\n';

    const tableName = `${this.ChainName}.${this.SchemaName}.${this.TableName}`;
    message += `\nPlease use the table given below.\n\ntable name: ${tableName}`;
    message +=
      'Please make sure that transaction hash should be represented as `tx_hash`.';
    message += `\ntable schema: ${this.TableSchema}`;

    const flipsidePrompt = ChatPromptTemplate.fromPromptMessages([
      SystemMessagePromptTemplate.fromTemplate(message),
      // HumanMessagePromptTemplate.fromTemplate("{text}"),
    ]);

    return flipsidePrompt;
  }
}
