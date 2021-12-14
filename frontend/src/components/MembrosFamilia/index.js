import React from 'react';

import { Input } from '../../pages/FamiliaTriagem/styles';

function MembrosFamilia({ qtde }) {
  let count = 0;
  let teste = Number(qtde);

  for (count; count < teste; count++) {
    return (
      <>
        <h3>Familiar {teste + 1}</h3>
        <div>
          <label htmlFor="">Nome</label>
          <Input
            // {...register("advertiser_name")}
            name="name_fcomp"
            type="text"
          />
          {/* {errName && <span className="messageError">{errName}</span>} */}
        </div>

        <div>
          <label htmlFor="">Data de Nasc.:</label>
          <Input
            // {...register("advertiser_name")}
            name="birth_date_fcomp"
            type="date"
          />
          {/* {errName && <span className="messageError">{errName}</span>} */}
        </div>

        <div>
          <label htmlFor="">Idade</label>
          <Input
            // {...register("advertiser_name")}
            name="age_fcomp"
            type="number"
          />
          {/* {errName && <span className="messageError">{errName}</span>} */}
        </div>

        <div>
          <label htmlFor="">Parentesco</label>
          <Input
            // {...register("advertiser_name")}
            name="kinship_fcomp"
            type="text"
          />
          {/* {errName && <span className="messageError">{errName}</span>} */}
        </div>

        <div>
          <label htmlFor="">Escolaridade</label>
          <Input
            // {...register("advertiser_name")}
            name="schooling_fcomp"
            type="text"
          />
          {/* {errName && <span className="messageError">{errName}</span>} */}
        </div>

        <div>
          <label htmlFor="">Valor da renda</label>
          <Input
            // {...register("advertiser_name")}
            name="income_amount_fcomp"
            type="text"
          />
          {/* {errName && <span className="messageError">{errName}</span>} */}
        </div>

        <div>
          <label htmlFor="">Origem da renda</label>
          <Input
            // {...register("advertiser_name")}
            name="income_origin_fcomp"
            type="text"
          />
          {/* {errName && <span className="messageError">{errName}</span>} */}
        </div>

        <div>
          <label htmlFor="">Possui problemas de saúde ou necessidades pessoais? (se sim, descrever)</label>
          <Input
            // {...register("advertiser_name")}
            name="health_problems_fcomp"
            type="text"
          />
          {/* {errName && <span className="messageError">{errName}</span>} */}
        </div>
      </>
    );
  }
}

export default MembrosFamilia;