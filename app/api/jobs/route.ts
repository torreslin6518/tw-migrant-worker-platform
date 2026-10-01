import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json(
        { message: '無法取得職缺列表', error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ jobs: data || [] });
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

    if (!body.title || !body.country || !body.category || !body.location || !body.shift || !body.description) {
      return NextResponse.json(
        { message: '缺少必要欄位' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('jobs')
      .insert([
        {
          title: body.title,
          country: body.country,
          category: body.category,
          salary_min: Number(body.salary_min || 0),
          salary_max: Number(body.salary_max || 0),
          location: body.location,
          shift: body.shift,
          deadline: body.deadline || null,
          description: body.description,
          is_active: true,
        },
      ])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { message: '新增職缺失敗', error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ data, message: '新增成功' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: '建立職缺失敗' }, { status: 500 });
  }
}
