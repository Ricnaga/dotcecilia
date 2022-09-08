export function PaystubTableFoot() {
  return (
    <tfoot className="border-t border-slate-800">
      <tr>
        <td colSpan={4}>
          <p className="mt-4 border-r border-t border-slate-800">Total:</p>
        </td>
        <td colSpan={1}>
          <p className="mt-4 text-center border-r border-t border-slate-800">
            -
          </p>
        </td>
        <td colSpan={3}>
          <p className="mt-4 text-center border-t border-slate-800">-</p>
        </td>
      </tr>
      <tr className="mb-4 border-y border-slate-800">
        <td colSpan={4}>
          <p className="mb-4 border-b border-r border-slate-800">
            Total líquido:
          </p>
        </td>
        <td colSpan={4}>
          <p className="mb-4 border-b border-slate-800 text-center">-</p>
        </td>
      </tr>

      <tr>
        <td colSpan={4}>
          <p className="my-8 text-center">
            Assinatura:.......................................................
          </p>
        </td>
        <td colSpan={4}>
          <p className="my-8 text-center">Data:__/__/__</p>
        </td>
      </tr>
    </tfoot>
  );
}
