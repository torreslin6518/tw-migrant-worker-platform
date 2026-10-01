import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { data, error } = await supabase
      .from('agencies')
      .select('*')
      .eq('id', Number(params.id))
      .eq('is_verified', true)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { message: '找不到仲介公司' },
        { status: 404 }
      );
    }

    return NextResponse.json({ agency: data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: '伺服器錯誤' },
      { status: 500 }
    );
  }
}
