import { Transfer } from 'threads';
import { BoundWasmProver } from '../bound_wasm_prover';
import { Prover } from '../prover/prover';

export class JoinSplitProver implements BoundWasmProver {
  constructor(private prover: Prover) {}

  public async computeKey() {
    const worker = this.prover.getWorker();
    await worker.call('join_split__init_proving_key');
  }

  public async loadKey(keyBuf: Uint8Array) {
    const worker = this.prover.getWorker();
    const keyPtr = await worker.call('bbmalloc', keyBuf.length);
    await worker.transferToHeap(Transfer(keyBuf, [keyBuf.buffer]) as any, keyPtr);
    await worker.call('join_split__init_proving_key_from_buffer', keyPtr);
    await worker.call('bbfree', keyPtr);
  }

  public async getKey() {
    const worker = this.prover.getWorker();
    const keySize = await worker.call('join_split__get_new_proving_key_data', 0);
    const keyPtr = Buffer.from(await worker.sliceMemory(0, 4)).readUInt32LE(0);
    const buf = Buffer.from(await worker.sliceMemory(keyPtr, keyPtr + keySize));
    await worker.call('bbfree', keyPtr);
    return buf;
  }

  public async createProof(buf: Buffer) {
    const worker = this.prover.getWorker();
    const mem = await worker.call('bbmalloc', buf.length);
    await worker.transferToHeap(buf, mem);
    const proverPtr = await worker.call('join_split__new_prover', mem, buf.length);
    await worker.call('bbfree', mem);
    const proof = await this.prover.createProof(proverPtr);
    await worker.call('join_split__delete_prover', proverPtr);
    return proof;
  }

  public getProver() {
    return this.prover;
  }
}
