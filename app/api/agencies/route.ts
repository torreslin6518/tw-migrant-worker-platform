import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('agencies')
      .select('*')
      .eq('is_verified', true)
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json(
        { message: '無法取得仲介公司列表', error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ agencies: data || [] });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: '伺服器錯誤' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.country || !body.services || !body.description) {
      return NextResponse.json(
        { message: '缺少必要欄位' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('agencies')
      .insert([
        {
          name: body.name,
          country: body.country,
          services: body.services,
          description: body.description,
          is_verified: false,
        },
      ])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { message: '新增仲介公司失敗', error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ data, message: '新增成功' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: '建立仲介公司失敗' }, { status: 500 });
  }
}
