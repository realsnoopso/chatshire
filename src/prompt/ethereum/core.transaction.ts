import { FlipsideSchema } from "../../schema/interface";
import { FlipsideRequestPrompt } from "../interface";

export function createEthereumCoreTransactionSchema(): FlipsideSchema {
    const ChainName = 'ethereum';
    const SchemaName = 'core';
    const TableName = 'fact_transaction';
    const TableSchema = 'BLOCK_HASH text, BLOCK_NUMBER number, BLOCK_TIMESTAMP timestamp_ntz, CUMULATIVE_GAS_USED float, ETH_VALUE float, FROM_ADDRESS text, GAS_LIMIT number, GAS_PRICE float, GAS_USED float';
    
    return new FlipsideSchema(ChainName, SchemaName, TableName, TableSchema);
}

// export function createEthereumCoreTransactionPrompt(combinedUserInputWithPrompt: string): string | Error {
//     const prompt = combinedUserInputWithPrompt;
//     let message = "I want to you to act like the expert who are good at writing SQL query." + "\n";
//     message += `Given the table below, please write the SQL query that can get the info about ${prompt}` + "\n";
//     message += "GIVE A SQL QUERY ONLY **without** any further responses/explanations." + "\n";
//     message += "If you are not 100% certain to get the valid information from the database table below, respond \"NO\" without further responses/explanations.\n";
//     message += "To query the database, you need to use the database information below";
//     const schema = createEthereumCoreTransactionSchema();
//     return schema.toString();
// }