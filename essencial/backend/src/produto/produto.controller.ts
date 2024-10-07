/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { Produto, produtos } from 'src/core';

@Controller('produtos')
export class ProdutoController {
  @Get()
  async obterProdutos(): Promise<Produto[]> {
    return produtos.map((produto) => ({
        ...produto, 
        especificacoes: { destaque: produto.especificacoes.destaque },
    }));
  }

  @Get(':id')
  async obterProdutoPorId(@Param('id') id:string): Promise<Produto | null> {
    const produto = produtos.find((produto) => produto.id === +id);
    return produto ?? null;
  }
}
