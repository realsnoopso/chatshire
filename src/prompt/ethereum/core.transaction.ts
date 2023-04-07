import { FlipsideSchema } from "../../schema/interface";

export function createEthereumCoreTransactionSchema(): FlipsideSchema {
    const ChainName = 'ethereum';
    const SchemaName = 'core';
    const TableName = 'fact_transactions';
    const TableSchema = 'BLOCK_HASH text, BLOCK_NUMBER number, BLOCK_TIMESTAMP timestamp_ntz, CUMULATIVE_GAS_USED float, ETH_VALUE float, FROM_ADDRESS text, GAS_LIMIT number, GAS_PRICE float, GAS_USED float';
    
    return new FlipsideSchema(ChainName, SchemaName, TableName, TableSchema);
}